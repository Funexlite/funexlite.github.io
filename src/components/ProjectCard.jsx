import { ArrowUpRight, Camera, Github } from "./Icons";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";


// i love destructing from the get-go
export default function ProjectCard({ project }) {
  const { title, description, image, tags, liveUrl, repoUrl } = project;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel transition duration-300 motion-safe:hover:-translate-y-1 hover:border-white/25">
      <div className="aspect-16/10 bg-linear-to-br from-[#14396a] via-[#0b1730] to-panel">
        {image ? (
          <img src={image} alt={`Screenshot of ${title}`} loading="lazy" className="size-full object-cover object-top" />
        ) : (
          <div role="img" aria-label={`${title} screenshot placeholder`} className="grid size-full place-items-center">
            <div className="flex flex-col items-center gap-2 text-white/50">
              <Camera className="size-8" />
              <span className="text-sm">Screenshot goes here</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm leading-relaxed text-white/60">{description}</p>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label={`${title} technologies`}>
          {tags.map((tag) => (
            <li key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo (opens in a new tab)`}
              className={`inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-110 ${focusRing}`}
            >
              Live demo
              <ArrowUpRight className="size-4" />
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source code on GitHub (opens in a new tab)`}
              className={`inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 ${focusRing}`}
            >
              <Github className="size-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
