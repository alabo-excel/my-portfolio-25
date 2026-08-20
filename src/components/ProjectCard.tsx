import Image from "next/image";

export type Project = {
    slug: string;
    name: string;
    link: string;
    archiveLink?: string;
    domain: string;
    description: string;
    tech: string[];
    category: string;
    status: string;
    image: string | null;
    featured?: boolean;
};

/* Offline domains get no outbound link — an archive snapshot when one exists,
   otherwise nothing, rather than sending anyone to a DNS error. */
function destination(project: Project) {
    if (project.status === "live") return project.link;
    return project.archiveLink ?? null;
}

function Preview({ project }: { project: Project }) {
    if (project.image) {
        return (
            <Image
                src={project.image}
                alt={`Homepage of ${project.name}`}
                width={1200}
                height={750}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
        );
    }

    // Honest empty state: say the preview is missing instead of filling the slot.
    return (
        <div className="grid size-full place-items-center bg-accent-soft px-6 text-center">
            <div>
                <p className="font-mono text-3xl text-accent">
                    {project.name.slice(0, 2).toUpperCase()}
                </p>
                <p className="mt-3 font-mono text-[10px] leading-relaxed tracking-[0.18em] text-muted uppercase">
                    No preview
                    <br />
                    domain offline
                </p>
            </div>
        </div>
    );
}

export default function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    const href = destination(project);
    const live = project.status === "live";

    const body = (
        <>
            {/* Browser bar carries the real domain — the proof these shipped */}
            {/* <div className="flex items-center gap-2.5 border-b border-rule px-4 py-2.5">
                <span aria-hidden className="flex shrink-0 gap-1.5">
                    <span className="size-2 rounded-full bg-rule" />
                    <span className="size-2 rounded-full bg-rule" />
                    <span className="size-2 rounded-full bg-rule" />
                </span>
                <span className="truncate font-mono text-[11px] text-muted">{project.domain}</span>
                <span className="ml-auto flex shrink-0 items-center gap-1.5">
                    <span
                        aria-hidden
                        className={`size-1.5 rounded-full ${live ? "bg-live" : "bg-muted"}`}
                    />
                    <span className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
                        {live ? "Live" : "Offline"}
                    </span>
                </span>
            </div> */}

            <div className="relative aspect-16/10 overflow-hidden bg-paper">
                <Preview project={project} />
            </div>

            <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg leading-tight font-semibold">{project.name}</h3>
                    {href && (
                        <span
                            aria-hidden
                            className="ml-auto shrink-0 font-mono text-sm text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                        >
                            ↗
                        </span>
                    )}
                </div>

                <p className="text-sm leading-relaxed text-muted">{project.description}</p>

                <p className="mt-auto pt-1 font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
                    {project.tech.join("  /  ")}
                </p>

                {!live && (
                    <p className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
                        {project.archiveLink ? "View archived snapshot" : "No public link"}
                    </p>
                )}
            </div>
        </>
    );

    const shell =
        "group flex h-full flex-col overflow-hidden rounded-xl border border-rule bg-surface transition-colors";

    return (
        <li className="h-full">
            {href ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${shell} hover:border-accent/60`}
                >
                    {body}
                </a>
            ) : (
                <div className={shell}>{body}</div>
            )}
        </li>
    );
}
