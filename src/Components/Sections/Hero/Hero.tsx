import Container from "@/Components/Ui/Container";
import FadeIn from "@/Components/Ui/FadeIn";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center py-8 md:py-16">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center w-full">
        <FadeIn direction="right" delay={0.1}>
          <HeroLeft />
        </FadeIn>
        <FadeIn direction="left" delay={0.2} className="order-first md:order-last">
          <HeroRight />
        </FadeIn>
      </Container>
    </section>
  );
}
