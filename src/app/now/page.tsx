import React from "react";
import Link from "next/link";
import Connect from "components/Connect";

export default function NowPage() {
    return (
        <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
            <section className="mx-auto max-w-3xl px-6 py-16">
                <div className="mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-full bg-white text-black border border-white px-4 py-2 text-sm hover:bg-transparent hover:text-white dark:border-white"
                    >
                        ← Back
                    </Link>
                </div>

                <h1 className="text-4xl font-bold">What I’m doing now</h1>
                <p className="mt-2 text-sm text-gray-600">
                    (This is <a className="underline" href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">a now page</a> — here’s what I’m focused on at the moment.)
                </p>
                <p className="mt-3 text-white">
                    Updated {new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
                </p>

                <div className="mt-10 space-y-8">
                    <section aria-labelledby="focus-heading">
                        <h2 id="focus-heading" className="text-2xl font-semibold">Focus</h2>
                        <ul className="mt-3 list-disc pl-5 text-white">
                            <li>Studies: deepening fundamentals and completing current coursework.</li>
                            <li>Job: delivering high-quality work and evolving team practices.</li>
                            <li>Let’s Build DAO: Building designing, documenting, and shipping community-driven features and ideas.</li>
                        </ul>
                    </section>

                    <section aria-labelledby="life-heading">
                        <h2 id="life-heading" className="text-2xl font-semibold">Beyond tech</h2>
                        <ul className="mt-3 list-disc pl-5 text-white">
                            <li>Reading more books and essays to broaden perspective.</li>
                            <li>Running weekly for clarity, consistency, and health.</li>
                            <li>Writing about technology, tools, and personal growth.</li>
                            <li>Learning how to play the piano</li>
                        </ul>
                    </section>

                    <section aria-labelledby="sayhi-heading">
                        <h2 id="sayhi-heading" className="text-2xl font-semibold">Say hi</h2>
                        <p className="mt-3 text-white">
                            I enjoy meeting builders and learners. If this resonates, reach out via the socials.
                        </p>
                    </section>
                </div>
            </section>
            <Connect />
        </main>
    );
}