
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight">Hi, I’m Alabo Excel.</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Software engineer crafting fast, accessible experiences.
        </p>

        <nav className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-white text-black border border-gray-300 px-6 py-3 text-sm hover:bg-transparent hover:text-white"
          >
            View Projects
          </Link>
          <Link
            href="/blog"
            className="rounded-full bg-white text-black border border-gray-300 px-6 py-3 text-sm hover:bg-transparent hover:text-white"
          >
            Read Blog
          </Link>
          <Link
            href="/now"
            className="rounded-full bg-white text-black border border-gray-300 px-6 py-3 text-sm hover:bg-transparent hover:text-white"
          >
            What I’m Doing Now
          </Link>
        </nav>

      </section>
    </main>
  );
}
