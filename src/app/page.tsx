import Hero from "@/Components/Sections/Hero/Hero";
import About from "@/Components/Sections/About/About";
import Skills from "@/Components/Sections/Skills/Skills";
import Education from "@/Components/Sections/Education/Education";
import Projects from "@/Components/Sections/Projects/Projects";
import Contact from "@/Components/Sections/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
