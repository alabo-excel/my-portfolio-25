'use client'
import React, { useMemo, useState } from "react";
import works from "data/works.json";
import ProjectCard, { type Project } from "components/ProjectCard";

const projects = works as Project[];

const filters = [
    { key: "all", label: "All" },
    { key: "client", label: "Client" },
    { key: "personal", label: "Personal" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function ProjectsPage() {
    const [filter, setFilter] = useState<FilterKey>("all");

    const counts = useMemo(
        () => ({
            all: projects.length,
            client: projects.filter((p) => p.category === "client").length,
            personal: projects.filter((p) => p.category === "personal").length,
        }),
        []
    );

    const visible = projects.filter(
        (project) => filter === "all" || project.category === filter
    );

    return (
        <section className="mx-auto max-w-5xl px-6 pt-14 pb-16 sm:pt-20 sm:pb-20">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                {projects.length} projects
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                Work
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                Client sites and personal builds, shown as they look today — each card
                links through to the real thing.
            </p>

            {/* Fixed-width segments so switching filters never shifts the row */}
            <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-rule p-1">
                {filters.map((option) => {
                    const active = filter === option.key;
                    return (
                        <button
                            key={option.key}
                            type="button"
                            onClick={() => setFilter(option.key)}
                            aria-pressed={active}
                            className={`inline-flex min-w-20 sm:min-w-24 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors ${active
                                ? "bg-ink text-paper"
                                : "text-muted hover:text-ink"
                                }`}
                        >
                            {option.label}
                            <span className="font-mono text-[10px] opacity-60">
                                {counts[option.key]}
                            </span>
                        </button>
                    );
                })}
            </div>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
                {visible.map((project) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        index={projects.indexOf(project)}
                    />
                ))}
            </ul>
        </section>
    );
}
