'use client'

export default function SiteFooter() {
    // Scroll rather than navigate, so returning to the top leaves no hash behind.
    const scrollToTop = () => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
    };

    return (
        <footer className="border-t border-rule">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 font-mono text-[11px] tracking-[0.08em] text-muted uppercase sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Alabo Excel</p>
                <p className="flex items-center gap-4">
                    <span>Next.js / Tailwind</span>
                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="group inline-flex items-center gap-1.5 uppercase transition-colors hover:text-accent"
                    >
                        Top
                        <span
                            aria-hidden
                            className="transition-transform duration-300 group-hover:-translate-y-0.5"
                        >
                            ↑
                        </span>
                    </button>
                </p>
            </div>
        </footer>
    );
}
