import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Now",
    description: "What Alabo Excel is focused on at the moment.",
};

/* Bump this by hand when the content below changes — a build date would claim
   this page was updated on every deploy, whether or not anything changed. */
const UPDATED = "August 2026";

const sections = [
    {
        label: "Focus",
        items: [
            "Job: delivering high-quality work and evolving team practices.",
            "Let’s Build DAO: designing, documenting, and shipping community-driven features and ideas.",
        ],
    },
    {
        label: "Beyond tech",
        items: [
            "Reading more books and essays to broaden perspective.",
            "Running weekly for clarity, consistency, and health.",
            "Writing about technology, tools, and personal growth.",
            "Learning how to play the piano.",
        ],
    },
];

export default function NowPage() {
    return (
        <section className="mx-auto max-w-6xl px-6 pt-14 pb-16 sm:pt-20 sm:pb-20">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                Updated {UPDATED}
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                What I’m doing now
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                This is a{" "}
                <a
                    className="underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    href="https://nownownow.com/about"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    now page
                </a>
                {" "}— a snapshot of what has my attention at the moment, rather than a résumé.
            </p>

            <div className="mt-14 space-y-12">
                {sections.map((section) => (
                    <section
                        key={section.label}
                        className="grid gap-5 sm:grid-cols-[13rem_1fr] sm:gap-14"
                    >
                        <h2 className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                            {section.label}
                        </h2>
                        <ul className="max-w-2xl">
                            {section.items.map((item) => (
                                <li
                                    key={item}
                                    className="border-t border-rule py-4 text-base leading-relaxed last:border-b"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}

                <section className="grid gap-5 sm:grid-cols-[13rem_1fr] sm:gap-14">
                    <h2 className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                        Say hi
                    </h2>
                    <div className="max-w-2xl">
                        <p className="text-base leading-relaxed">
                            I enjoy meeting builders and learners. If any of this resonates, reach
                            out — or take a look at{" "}
                            <Link
                                href="/projects"
                                className="underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                            >
                                what I’ve been building
                            </Link>
                            .
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
}
