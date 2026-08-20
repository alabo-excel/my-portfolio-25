import React from "react";

const socials = [
    { label: "GitHub", handle: "alabo-excel", href: "https://github.com/alabo-excel" },
    { label: "LinkedIn", handle: "alabo-excel", href: "https://www.linkedin.com/in/alabo-excel" },
    { label: "X", handle: "@alaboExcel", href: "https://x.com/alaboExcel" },
    { label: "Email", handle: "alaboexcel@gmail.com", href: "mailto:alaboexcel@gmail.com" },
];

const Connect = () => {
    return (
        <section id="connect" className="border-t border-rule">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
                <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:gap-16">
                    <div>
                        <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                            Connect
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                            Let’s build something.
                        </h2>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                            I’m always up for a conversation about a product, a team, or an idea
                            you’re turning over. Pick whichever line is easiest.
                        </p>
                    </div>

                    <ul className="sm:pt-9">
                        {socials.map((social) => (
                            <li key={social.href} className="border-t border-rule last:border-b">
                                <a
                                    href={social.href}
                                    {...(social.href.startsWith("mailto:")
                                        ? {}
                                        : { target: "_blank", rel: "noopener noreferrer" })}
                                    className="group flex items-baseline gap-4 py-4 transition-colors hover:text-accent"
                                >
                                    <span className="w-20 shrink-0 font-mono text-[11px] tracking-[0.12em] text-muted uppercase transition-colors group-hover:text-accent">
                                        {social.label}
                                    </span>
                                    <span className="min-w-0 flex-1 truncate text-sm sm:text-base">
                                        {social.handle}
                                    </span>
                                    <span
                                        aria-hidden
                                        className="shrink-0 font-mono text-sm text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                                    >
                                        ↗
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Connect;
