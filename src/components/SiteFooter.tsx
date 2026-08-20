import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="border-t border-rule">
            <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 font-mono text-[11px] tracking-[0.08em] text-muted uppercase sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Alabo Excel</p>
                <p className="flex items-center gap-4">
                    <span>Next.js / Tailwind</span>
                    <Link href="#top" className="transition-colors hover:text-accent">
                        Top ↑
                    </Link>
                </p>
            </div>
        </footer>
    );
}
