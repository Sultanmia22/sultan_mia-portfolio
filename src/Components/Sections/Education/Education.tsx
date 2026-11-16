import Container from "@/Components/Ui/Container";
import FadeIn from "@/Components/Ui/FadeIn";
import { GraduationCap, BookOpen } from "lucide-react";
import educationData from "@/data/education.json";

const iconMap: Record<string, React.ReactNode> = {
  diploma: <GraduationCap className="w-5 h-5 text-primary" />,
  course:  <BookOpen className="w-5 h-5 text-primary" />,
};

export default function Education() {
  return (
    <section id="education" className="py-20">
      <Container className="flex flex-col gap-12">

        <FadeIn>
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              My Journey
              <span className="w-6 h-px bg-accent" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Education &amp; Certification
            </h2>
            <p className="text-para max-w-md">
              The learning path that shaped my skills as a developer.
            </p>
          </div>
        </FadeIn>

        <div className="relative flex flex-col gap-0 max-w-4xl mx-auto w-full">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <FadeIn
                key={item.title}
                direction={isLeft ? "right" : "left"}
                delay={index * 0.15}
              >
                <div className="relative flex items-center md:gap-0 gap-6 mb-12 md:mb-16">
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div className="flex flex-col gap-1">
                          <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                            {item.type}
                          </span>
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                              {iconMap[item.iconKey]}
                            </div>
                            <h3 className="text-white font-semibold text-base leading-snug">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        {item.period && (
                          <span className="px-3 py-1 rounded-full border border-white/10 text-para text-xs whitespace-nowrap">
                            {item.period}
                          </span>
                        )}
                        {item.badge && (
                          <span className="px-3 py-1 rounded-full border border-white/10 text-para text-xs whitespace-nowrap">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-white text-sm font-medium">{item.institution}</p>
                      <p className="text-para text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[#0B1120] hidden md:block" />
                </div>
              </FadeIn>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
