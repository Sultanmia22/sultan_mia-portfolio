import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-primary/30 transition-colors">

      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-5 flex-1">

        {/* Title + description */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-semibold text-lg">{project.title}</h3>
          <p className="text-para text-sm leading-relaxed">{project.description}</p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full border border-white/10 text-para text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        {/* View Details */}
        <Link
          href={`/projects/${project.id}`}
          className="flex items-center gap-1 text-primary text-sm hover:gap-2 transition-all"
        >
          View Details <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-auto pt-2">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primary/80 transition-colors"
          >
            Live Demo <ExternalLink className="w-4 h-4" />
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/20 text-para text-sm font-medium px-5 py-2.5 rounded-full hover:border-primary/50 hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </Link>
        </div>

      </div>
    </div>
  );
}
