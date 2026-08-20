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
        <header className="border-b border-rule">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-6">
                <Link href="/" className="font-serif text-lg transition-colors hover:text-accent">
                    Alabo Excel
                </Link>

                <nav aria-label="Main">
                    <ul className="flex items-center gap-5 sm:gap-6">
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
                                        className={`text-sm transition-colors ${active
                                            ? "text-ink underline decoration-accent decoration-2 underline-offset-[6px]"
                                            : "text-muted hover:text-ink"
                                            }`}
                                    >
                                        {link.label}
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
