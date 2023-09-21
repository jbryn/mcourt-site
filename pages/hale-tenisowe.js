import Contact from "@/components/courts/contact/contact";
import About from "@/components/tennis-halls/about/about";
import Description from "@/components/tennis-halls/description/description";
import Hero from "@/components/shared/hero/hero";
import Features from "@/components/tennis-halls/features/features";
import Testimonials from "@/components/home/testimonials/testimonials";

export default function TennisHalls() {
  return (
    <main>
      <Hero
        backgroundUrl={"/img/tennis-halls/hero.jpeg"}
        title="Hale tenisowe"
        subtitle={`Nasze hale tenisowe to połączenie tradycji drewna z nowoczesnymi osiągnięciami
        technologicznymi. Dzięki naszemu doświadczeniu zapewnimy Ci doskonałe warunki do gry przez cały
        rok.`}
      />
      {/* <About /> */}
      <Features />
      {/* <Description /> */}
      <Testimonials />
      <Contact />
    </main>
  );
}
