import Container from "@/Components/Ui/Container";
import FadeIn from "@/Components/Ui/FadeIn";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container className="flex flex-col gap-12">

        <FadeIn>
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              My Work
              <span className="w-6 h-px bg-accent" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Projects
            </h2>
            <p className="text-para max-w-md">
              A few full-stack projects I&apos;ve built to solve real problems.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-4 py-8 px-6 rounded-2xl border border-dashed border-white/10 text-center">
            <p className="text-para text-sm max-w-md">
              These are just a few highlights. I have more projects, experiments and open-source contributions on GitHub.
            </p>
            <Link
              href="https://github.com/Sultanmia22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-primary text-primary text-sm font-medium px-6 py-2.5 rounded-full hover:bg-primary/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              View All on GitHub
            </Link>
          </div>
        </FadeIn>

      </Container>
    </section>
  );
}
