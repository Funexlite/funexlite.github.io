import { profile } from "../data/profile";
import { ArrowUpRight, Camera } from "./Icons";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";


function PhotoPlaceholder() {
  return (
    <div role="img" aria-label="Photo placeholder" className="absolute inset-5 grid place-items-center 
                rounded-2xl border-2 border-dashed border-white/25 text-center sm:inset-8">
      <div className="flex flex-col items-center gap-3 px-6">
        <Camera className="size-10 text-white/50" />
        <p className="font-medium text-white/80">My photo goes here</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const { name, role, location, intro, photo } = profile;
  const [first, ...rest] = name.split(" ");
  const last = rest.join(" ");

  return (
    <section id="home" className="mx-auto max-w-6xl scroll-mt-24 px-5">
      <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-panel lg:grid-cols-2">
        {/* Photo side */}
        <div className="relative min-h-85 bg-linear-to-br from-[#14396a] via-[#0b1730] to-panel motion-safe:animate-fade-up lg:min-h-130">
          {photo ? (
            <img src={photo} alt={`Portrait of ${name}`} className="absolute inset-0 size-full object-cover object-top" />
          ) : (
            <PhotoPlaceholder />
          )}
        </div>

        {/* Text side */}
        <div className="flex flex-col justify-center gap-6 p-8 sm:p-12 motion-safe:animate-fade-up" style={{ animationDelay: "120ms" }}>
          <p className="text-lg text-white/70">Hey there, I&rsquo;m</p>

          <h1 className="font-display text-5xl leading-[0.95] font-semibold tracking-tight text-white sm:text-7xl">
            {first}
            {last && (<><br />{last}</>)}
          </h1>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {role}
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Based in {location}
            </li>
          </ul>

          <p className="max-w-md text-white/60">{intro}</p>

          <div className="flex items-center gap-2">
            <a href="#contact" className={`rounded-full bg-accent px-8 py-3.5 font-semibold text-ink transition hover:brightness-110 ${focusRing}`}>
              Hire Me
            </a>
            <a href="#projects" aria-label="View my projects" className={`group grid size-12 place-items-center rounded-full bg-accent text-ink transition hover:brightness-110 ${focusRing}`}>
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
