import React from "react";

const socials = [
    { label: "GitHub", href: "https://github.com/alabo-excel" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alabo-excel" },
    { label: "X (Twitter)", href: "https://x.com/alaboExcel" },
    { label: "Email", href: "mailto:alaboexcel@gmail.com" },
];

const Connect = () => {
    return (
        <section className="mt-16 mx-auto max-w-3xl px-6 py-10 border-t border-white text-center">
            <h2 className="text-4xl font-semibold">Connect with Me</h2>
            <p className="mt-2 text-sm text-white">
                If you'd like to get in touch, feel free to reach out on any of these platforms.
            </p>

            <ul className="mt-6 flex flex-wrap justify-center gap-3">
                {socials.map((s) => (
                    <li key={s.href}>
                        <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-full bg-white text-black border border-white px-4 py-2 text-sm hover:bg-transparent hover:text-white dark:bg-black dark:text-white dark:border-white"
                        >
                            {s.label}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Connect;