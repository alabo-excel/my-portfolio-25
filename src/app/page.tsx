import Link from "next/link";
import works from "data/works.json";
import ProjectCard, { type Project } from "components/ProjectCard";

const projects = works as Project[];
const featured = projects.filter((project) => project.featured);

const stack = [
    { group: "Frontend", items: "React  /  Next.js  /  React Native  /  Tailwind" },
    { group: "Backend", items: "Node.js  /  Express  /  Firebase  /  Supabase" },
    { group: "Beyond code", items: "Community  /  Mentorship  /  Writing" },
];

export default function Home() {
    return (
        <>
            <section className="mx-auto max-w-5xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
                <div className="rise">
                    <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                        Software engineer <span className="text-accent">/</span> Community builder
                    </p>
                    <h1 className="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-7xl">
                        Hi, I’m Alabo Excel.
                        <br />
                        <span className="text-muted">I build products that solve real problems.</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                        I work across web and mobile with React, Next.js, and Node.js — with a bias
                        toward clean code, performance, and interfaces people can actually use.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-3">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
                        >
                            View work
                            <span aria-hidden className="font-mono text-xs">→</span>
                        </Link>
                        <Link
                            href="https://alaboexcel.hashnode.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-rule px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
                        >
                            Read the blog
                            <span aria-hidden className="font-mono text-xs">↗</span>
                        </Link>
                        <Link
                            href="/now"
                            className="inline-flex items-center gap-2 px-1 py-2.5 text-sm text-muted underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                        >
                            What I’m doing now
                        </Link>
                    </div>
                </div>
            </section>

            <section aria-labelledby="work-heading" className="border-t border-rule">
                <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                        <h2 id="work-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            Selected work
                        </h2>
                        <Link
                            href="/projects"
                            className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase transition-colors hover:text-accent"
                        >
                            All {projects.length} projects →
                        </Link>
                    </div>

                    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {featured.map((project, i) => (
                            <ProjectCard key={project.slug} project={project} index={i} />
                        ))}
                    </ul>
                </div>
            </section>

            <section aria-labelledby="about-heading" className="border-t border-rule">
                <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
                    <div className="grid gap-8 sm:grid-cols-[10rem_1fr] sm:gap-14">
                        <h2
                            id="about-heading"
                            className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase"
                        >
                            About
                        </h2>
                        <div className="max-w-2xl space-y-5 text-base leading-relaxed">
                            <p>
                                I’m a software engineer who genuinely enjoys building things that
                                solve real problems. Most of my time goes into React, React Native,
                                Next.js, and Node.js — crafting products across web and mobile with a
                                strong focus on clean code, performance, and user experience.
                            </p>
                            <p className="text-muted">
                                Outside of coding, community means a lot to me. I’m actively involved
                                in building developer communities, where I help create learning
                                opportunities, share knowledge, and support developers at different
                                stages of their journey.
                            </p>
                            <p className="text-muted">
                                I also enjoy teaching, writing, and breaking down complex technical
                                concepts into simple, relatable ideas — whether through content,
                                mentorship, or conversations with other builders. At the end of the
                                day, I’m just someone who loves building, learning, and growing
                                alongside others.
                            </p>
                        </div>
                    </div>

                    <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-3">
                        {stack.map((row) => (
                            <div key={row.group} className="bg-surface px-5 py-6">
                                <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                                    {row.group}
                                </dt>
                                <dd className="mt-3 font-mono text-xs leading-relaxed">{row.items}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>
        </>
    );
}
