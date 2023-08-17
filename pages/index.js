import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Surfaces from "@/components/surfaces/surfaces";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Surfaces />
      <About />
      <Testimonials />
      <Projects />
      <Contact />
    </main>
  );
}
