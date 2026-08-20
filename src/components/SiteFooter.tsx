'use client'

export default function SiteFooter() {
    // Scroll rather than navigate, so returning to the top leaves no hash behind.
    const scrollToTop = () => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
    };

    return (
        <footer className="border-t border-rule">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
                <p>© {new Date().getFullYear()} Alabo Excel</p>
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                    Back to top
                    <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:-translate-y-0.5"
                    >
                        ↑
                    </span>
                </button>
            </div>
        </footer>
    );
}
