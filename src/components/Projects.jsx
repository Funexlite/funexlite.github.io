import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl scroll-mt-4 px-5 pt-24">
      <div className="mt-10 mb-10 flex flex-col gap-3">
        <p className="text-sm text-accent">Selected work</p>
        <h2 id="projects-title" className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects
        </h2>
        <p className="max-w-xl text-white/60">
          Things I&rsquo;ve built while learning. Each one has a link to the code on GitHub.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects
