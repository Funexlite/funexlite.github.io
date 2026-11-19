import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { ArrowRight, CloseIcon, MenuIcon } from "./Icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative z-20">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#home" className={`flex items-center gap-2 text-xl font-semibold tracking-tight ${focusRing}`}>
          <span className="grid size-8 place-items-center rounded-lg bg-accent text-base font-bold text-ink">
            {profile.brand.charAt(0)}
          </span>
          {profile.brand}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`transition-colors hover:text-white ${focusRing}`}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden items-center gap-3 rounded-full bg-white py-1.5 pr-1.5 pl-5 text-sm font-semibold text-ink transition hover:bg-white/90 md:inline-flex ${focusRing}`}
        >
          Contact Me
          <span className="grid size-8 place-items-center rounded-full bg-ink text-white">
            <ArrowRight className="size-4" />
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`grid size-11 place-items-center rounded-full border border-white/20 md:hidden ${focusRing}`}
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-5 top-full rounded-2xl border border-white/10 bg-panel p-3 md:hidden">
          <ul className="grid">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white ${focusRing}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
