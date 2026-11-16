import Container from "@/Components/Ui/Container";
import FadeIn from "@/Components/Ui/FadeIn";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container className="flex flex-col gap-10">

        <FadeIn>
          <div className="flex flex-col gap-2">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              A little about me
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <FadeIn direction="right" delay={0.1}>
            <AboutLeft />
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <AboutRight />
          </FadeIn>
        </div>

      </Container>
    </section>
  );
}
