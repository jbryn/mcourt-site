import Contact from "@/components/courts/contact/contact";
import Grass from "@/components/courts/surfaces/grass/grass";
import Hero from "@/components/shared/hero/hero";

export default function CourtsPage() {
  return (
    <main>
      <Hero
        backgroundUrl={"/img/grass/image5.jpeg"}
        title="Sztuczna trawa"
        subtitle={`Nawierzchnie z sztucznej trawy do kortów tenisowych to rozwiązania przyjazne środowisku i wydajne. Dzięki nam możesz cieszyć się nowoczesnością i minimalną konserwacją na swoim korcie. Dowiedz się więcej!`}
      />
      <Grass />
      <Contact />
    </main>
  );
}
