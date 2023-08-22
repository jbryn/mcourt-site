import About from "@/components/home/about/about";
import Contact from "@/components/home/contact/contact";
import Hero from "@/components/home/hero/hero";
import Projects from "@/components/home/projects/projects";
import Surfaces from "@/components/home/surfaces/surfaces";
import Testimonials from "@/components/home/testimonials/testimonials";

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
