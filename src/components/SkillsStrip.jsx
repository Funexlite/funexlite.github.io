import { profile } from "../data/profile";

export default function SkillsStrip() {
  return (
    <section aria-label="Technologies I use" className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-4 px-5">
      <span className="text-sm text-white/80">Technical Proficiences :</span>
      {profile.skills.map((skill) => (
        <span key={skill} className="text-lg font-semibold tracking-tight text-white/50">
          {skill}
        </span>
      ))}
    </section>
  );
}
