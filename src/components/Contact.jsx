import { useEffect, useState } from "react";
import { contact } from "../data/contact";
import { ArrowUpRight, Check, Copy } from "./Icons";

const focusRing =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function Contact() {
    const { email, availability, heading, intro, links } = contact;
    const [copied, setCopied] = useState(false);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
        } catch { }
    }

    useEffect(() => {
        if (!copied) return;
        const timer = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timer);
    }, [copied]);


    return (
        <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl scroll-mt-4 px-5 pt-24">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel p-7 sm:p-12">
                {/* Soft accent glow in the corner, purely decorative */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_0%_0%,rgba(63,214,245,0.16),transparent)]" />

                <div className="relative grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
                    {/* Left: the pitch and the email */}
                    <div>
                        <p className="mb-6 font-mono text-sm text-accent">02 / contact</p>

                        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/80">
                            <span aria-hidden="true" className="size-2 rounded-full bg-accent motion-safe:animate-pulse" />
                            {availability}
                        </p>

                        <h2 id="contact-title" className="font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
                            {heading.map((part, i) => (
                                <span key={i} className={part.highlight ? "text-accent" : undefined}>{part.text}</span>
                            ))}
                        </h2>
                        <p className="mt-5 max-w-md text-white/60">{intro}</p>

                        {/* The email is the call to action: big, clickable, and one tap to copy */}
                        <div className="mt-10 flex flex-col items-start gap-4">
                            <a
                                href={`mailto:${email}`}
                                className={`font-display text-2xl font-medium wrap-anywhere underline decoration-white/25 decoration-2 underline-offset-8 transition hover:decoration-accent sm:text-4xl ${focusRing}`}
                            >
                                {email}
                            </a>
                            <button
                                type="button"
                                onClick={copyEmail}
                                className={`inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10 ${focusRing}`}
                            >
                                {copied ? <Check className="size-4 text-accent" /> : <Copy className="size-4" />}
                                {copied ? "Copied" : "Copy email"}
                            </button>
                            <span role="status" className="sr-only">{copied ? "Email address copied" : ""}</span>
                        </div>
                    </div>

                    <div className="self-end">
                        <h3 className="mb-4 font-mono text-sm text-white/50">Social Handles</h3>
                        <ul className="divide-y divide-white/10 border-y border-white/10">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${link.label}, ${link.handle} (opens in a new tab)`}
                                        className={`group flex items-center justify-between gap-4 py-5 transition hover:pl-2 ${focusRing}`}
                                    >
                                        <span>
                                            <span className="block font-display text-xl font-semibold">{link.label}</span>
                                            <span className="block text-sm text-white/50">{link.handle}</span>
                                        </span>
                                        <ArrowUpRight className="size-5 text-white/50 transition group-hover:text-accent" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact