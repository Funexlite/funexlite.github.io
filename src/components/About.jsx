import { about } from "../data/about";
import { ArrowRight } from "./Icons";

const card = "rounded-3xl border border-white/10 bg-panel p-7 sm:p-9";

const dotStyles = {
  done: "bg-accent",
  now: "bg-accent ring-4 ring-accent/25 motion-safe:animate-pulse",
  next: "border border-dashed border-white/50 bg-panel",
};
const statusWords = { done: "Completed: ", now: "In progress: ", next: "Up next: " };

function About() {
  const { label, statement, paragraphs, journey, learningNow, principles, lookingFor } = about;

  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl scroll-mt-4 px-5 pt-24">
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Bio: spans two columns */}
        <div className={`${card} lg:col-span-2`}>
          <p className="mb-6 font-mono text-sm text-accent">{label}</p>
          <h2 id="about-title" className="font-display text-3xl leading-[1.1] font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {statement.map((part, i) => (
              <span key={i} className={part.highlight ? "text-accent" : undefined}>{part.text}</span>
            ))}
          </h2>
          <div className="mt-6 grid max-w-2xl gap-4 text-white/60">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className={`${card} lg:col-start-3 lg:row-span-2 lg:row-start-1`}>
          <h3 className="mb-6 font-display text-xl font-semibold">The path so far</h3>
          <ol className="ml-1.5 border-l border-white/15">
            {journey.map((step) => (
              <li key={step.title} className="relative pb-7 pl-6 last:pb-0">
                <span aria-hidden="true" className={`absolute top-1.5 -left-1.5 size-3 rounded-full ${dotStyles[step.status]}`} />
                <p className="flex items-center gap-2 font-medium">
                  <span className="sr-only">{statusWords[step.status]}</span>
                  {step.title}
                  {step.status !== "done" && (
                    <span aria-hidden="true" className="rounded-full border border-white/20 px-2 py-0.5 font-mono text-[11px] text-white/60">
                      {step.status}
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm text-white/60">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* How I work */}
        <div className={card}>
          <h3 className="mb-5 font-display text-xl font-semibold">How I work</h3>
          <ol className="grid gap-5">
            {principles.map((p, i) => (
              <li key={p.title} className="flex gap-4">
                <span aria-hidden="true" className="font-mono text-sm text-accent">0{i + 1}</span>
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="mt-1 text-sm text-white/60">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Learning now */}
        <div className={card}>
          <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-semibold">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent motion-safe:animate-pulse" />
            Right now
          </h3>
          <ul className="flex flex-wrap gap-2">
            {learningNow.map((item) => (
              <li key={item} className="rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-white/70">{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-col justify-between gap-8 rounded-3xl bg-accent p-7 text-ink sm:p-9 lg:col-span-3 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">{lookingFor.title}</p>
            <p className="mt-3 text-ink/70">{lookingFor.note}</p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-ink px-7 py-3.5 font-semibold text-white transition hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:self-auto"
          >
            Let&rsquo;s talk
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
