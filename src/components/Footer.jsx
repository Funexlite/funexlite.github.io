import { profile } from "../data/profile";
import { ArrowUp } from "./Icons";

function Footer() {
    return (
        <footer className="mx-auto mt-24 max-w-6xl px-5">
            <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
                <p>
                    &copy; {new Date().getFullYear()} {profile.name}. Built with React and TailwindCSS.
                </p>
                <a
                    href="#home"
                    className="inline-flex items-center gap-2 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    Back to top
                    <ArrowUp className="size-4" />
                </a>
            </div>

            {/* my brand design animation */}
            <div aria-hidden="true" className="mt-6 overflow-hidden text-center select-none">
                <p
                    className="translate-y-[22%] font-display leading-none font-semibold tracking-tighter whitespace-nowrap text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.16)]"
                    style={{ fontSize: "min(17vw, 190px)" }}
                >
                    {profile.brand}
                </p>
            </div>
        </footer>
    );
}

export default Footer