import Container from "@/Components/Ui/Container";
import FadeIn from "@/Components/Ui/FadeIn";
import { Code2, Server, Database, Wrench } from "lucide-react";
import skillsData from "@/data/skills.json";

const iconMap: Record<string, React.ReactNode> = {
  frontend: <Code2 className="w-5 h-5 text-primary" />,
  backend:  <Server className="w-5 h-5 text-primary" />,
  database: <Database className="w-5 h-5 text-primary" />,
  tools:    <Wrench className="w-5 h-5 text-primary" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container className="flex flex-col gap-12">

        <FadeIn>
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              My Skills
              <span className="w-6 h-px bg-accent" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Technologies I work with
            </h2>
            <p className="text-para max-w-md">
              A curated stack of modern tools and frameworks I use to build scalable web applications.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillsData.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.1}>
              <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3">
                  {iconMap[group.iconKey]}
                  <h3 className="text-white font-semibold text-lg">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full border border-white/10 text-para text-xs hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </Container>
    </section>
  );
}
