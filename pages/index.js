import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Surfaces from "@/components/surfaces/surfaces";

export default function Home() {
  return (
    <main>
      <Hero />
      <Surfaces />
      <About />
      <Projects />
    </main>
  );
}
