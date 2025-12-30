
import Connect from "components/Connect";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-6xl font-bold tracking-tight">Hi 👋,  <br /> I’m Alabo Excel.</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Software engineer, Blockchain Enthusiast, Community Builder.
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
            Read Blogs
          </Link>
          <Link
            href="/now"
            className="rounded-full bg-white text-black border border-gray-300 px-6 py-3 text-sm hover:bg-transparent hover:text-white"
          >
            What I’m Doing Now
          </Link>
        </nav>

        <section className="mt-12 space-y-4">
          <h2 className="text-4xl font-semibold">About</h2>
          <p className="text-gray-700 text-lg dark:text-gray-300">
            I'm a software engineer who genuinely enjoys building things that solve real problems. I spend most of my time working with React, React Native, Next.js, and Node.js, crafting products across web and mobile with a strong focus on clean code, performance, and user experience.
          </p>
          <p className="text-gray-700 text-lg dark:text-gray-300">
            Outside of coding, community means a lot to me. I’m actively involved in building developer communities, where I help create learning opportunities, share knowledge, and support developers at different stages of their journey.
            <br /> <br />
            I also enjoy teaching, writing, and breaking down complex technical concepts into simple, relatable ideas—whether through content, mentorship, or conversations with other builders.
          </p>
          <p className="text-gray-700 text-lg dark:text-gray-300">
            At the end of the day, I’m just someone who loves building, learning, and growing alongside others.          </p>

        </section>
      </section>
      <Connect />
    </main>
  );
}
