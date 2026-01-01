'use client'
import React, { useState } from "react";
import Link from "next/link";
import works from "../../data/works.json";

export default function ProjectsPage() {
    const [filter, setFilter] = useState('all');
    const filteredWorks = works.filter(proj => filter === 'all' || proj.category === filter);

    return (
        <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
            <section className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    A selection of things I’ve built or contributed to.
                </p>

                <div className="mt-6 flex gap-2">
                    <button
                        onClick={() => setFilter('all')}
                        className={`rounded-full px-4 py-2 text-sm border ${filter === 'all'
                                ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                                : 'bg-transparent text-black border-black hover:bg-black hover:text-white dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('personal')}
                        className={`rounded-full px-4 py-2 text-sm border ${filter === 'personal'
                                ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                                : 'bg-transparent text-black border-black hover:bg-black hover:text-white dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'
                            }`}
                    >
                        Personal
                    </button>
                    <button
                        onClick={() => setFilter('client')}
                        className={`rounded-full px-4 py-2 text-sm border ${filter === 'client'
                                ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                                : 'bg-transparent text-black border-black hover:bg-black hover:text-white dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'
                            }`}
                    >
                        Client
                    </button>
                </div>

                <ul className="mt-8 grid gap-6 sm:grid-cols-1">
                    {filteredWorks.map((proj) => (
                        <li
                            key={proj.name}
                            className="p-6 bg-white dark:bg-[#0c0c0c] hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start justify-between">
                                <h2 className="text-3xl font-semibold">{proj.name}</h2>
                            </div>

                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                {proj.description}
                            </p>
                            <p className="mt-2 text-sm">
                                Tech: {proj.techUsed}
                            </p>

                            <div className="mt-4">
                                <a
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block rounded-full bg-white text-black border border-gray-300 px-4 py-2 text-sm hover:bg-white hover:text-black hover:border-gray-400 dark:bg-black dark:text-white dark:border-gray-700"
                                >
                                    Visit site →
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-10">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-full bg-white text-black border border-gray-300 px-4 py-2 text-sm hover:bg-white hover:border-gray-400 dark:border-gray-700"
                    >
                        ← Back
                    </Link>
                </div>
            </section>
        </main>
    )
}