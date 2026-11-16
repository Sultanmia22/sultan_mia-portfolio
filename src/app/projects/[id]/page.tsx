import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2, ChevronRight } from "lucide-react";
import Container from "@/Components/Ui/Container";
import projectsData from "@/data/projects.json";

export async function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <main className="py-10 pb-20">
      <Container className="flex flex-col gap-10">

        {/* Back link */}
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-para hover:text-primary transition-colors w-fit text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-sm">{project.subtitle}</span>
            </span>
          </div>
          <span className="text-para text-xs font-mono">
            ARCH-ID: <span className="text-primary font-semibold">{project.id.toUpperCase()}-V1</span>
          </span>
        </div>

        {/* Hero image */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white/10 select-none">
              {project.title} — Project Details
            </h2>
          </div>
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Left — main content */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* Overview */}
            <div className="flex flex-col gap-3">
              <h3 className="flex items-center gap-2 text-white font-semibold text-xl">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Overview
              </h3>
              <p className="text-para leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Challenges */}
            <div className="flex flex-col gap-4">
              <h3 className="flex items-center gap-2 text-white font-semibold text-xl">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Challenges &amp; Learnings
              </h3>
              <div className="flex flex-col gap-3">
                {project.challenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-para text-sm leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Plans */}
            <div className="flex flex-col gap-4">
              <h3 className="flex items-center gap-2 text-white font-semibold text-xl">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Future Plans
              </h3>
              <ul className="flex flex-col gap-2">
                {project.futurePlans.map((plan, i) => (
                  <li key={i} className="flex items-start gap-2 text-para text-sm">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {plan}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right — sidebar */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24">

            {/* Tech stack */}
            <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <h4 className="text-white font-semibold">Tech Stack</h4>
                <span className="text-para text-xs font-mono">v1.0</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.mainTech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border border-white/10 text-para text-xs font-mono hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Project info */}
            <div className="flex flex-col gap-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
              {[
                { label: "Role", value: project.role },
                { label: "Project Type", value: project.type },
                { label: "Timeline", value: project.timeline },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between px-5 py-3 border-b border-white/5 last:border-0"
                >
                  <span className="text-para text-sm">{item.label}</span>
                  <span className="text-white text-sm font-medium">{item.value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between px-5 py-3">
                <span className="text-para text-sm">Status</span>
                <span className="flex items-center gap-1.5 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {project.status}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-primary/80 transition-colors"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/20 text-para text-sm font-medium px-6 py-3 rounded-full hover:border-primary/50 hover:text-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub Repository
              </Link>
            </div>

          </div>
        </div>

      </Container>
    </main>
  );
}
