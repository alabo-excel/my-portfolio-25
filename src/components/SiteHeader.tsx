'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/projects", label: "Work" },
    { href: "/now", label: "Now" },
    { href: "https://alaboexcel.hashnode.dev/", label: "Writing", external: true },
];

export default function SiteHeader() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-rule bg-paper/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-5 sm:gap-4 sm:px-6">
                <Link href="/" className="group flex shrink-0 items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-rule font-mono text-[11px] transition-colors group-hover:border-accent group-hover:text-accent">
                        AE
                    </span>
                    <span className="text-sm font-medium">Alabo Excel</span>
                </Link>

                <nav aria-label="Main">
                    <ul className="flex items-center gap-1">
                        {links.map((link) => {
                            const active = !link.external && pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        aria-current={active ? "page" : undefined}
                                        {...(link.external
                                            ? { target: "_blank", rel: "noopener noreferrer" }
                                            : {})}
                                        className={`inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-sm transition-colors sm:px-3 ${active
                                            ? "text-accent"
                                            : "text-muted hover:text-ink"
                                            }`}
                                    >
                                        {link.label}
                                        {link.external && (
                                            <span aria-hidden className="hidden font-mono text-[10px] opacity-60 sm:inline">↗</span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
