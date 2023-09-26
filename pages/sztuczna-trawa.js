import Head from "next/head";
import Contact from "@/components/courts/contact/contact";
import Grass from "@/components/courts/surfaces/grass/grass";
import Hero from "@/components/shared/hero/hero";

export default function CourtsPage() {
  return (
    <>
      <Head>
        <title>
          Korty Tenisowe z Nawierzchnią Sztucznej Trawy | Nowoczesność i
          Minimalna Konserwacja
        </title>
        <meta
          name="description"
          content="Nawierzchnie z sztucznej trawy do kortów tenisowych to rozwiązania przyjazne środowisku i wydajne. Dzięki nam możesz cieszyć się nowoczesnością i minimalną konserwacją na swoim korcie. Dowiedz się więcej!"
          key="desc"
        />
        <meta
          property="og:title"
          content="Korty Tenisowe z Nawierzchnią Sztucznej Trawy | Nowoczesność i
          Minimalna Konserwacja"
        />
        <meta
          property="og:description"
          content="Nawierzchnie z sztucznej trawy do kortów tenisowych to rozwiązania przyjazne środowisku i wydajne. Dzięki nam możesz cieszyć się nowoczesnością i minimalną konserwacją na swoim korcie. Dowiedz się więcej!"
        />
        <meta property="og:image" content="./logos/mcourt-logo-color.png" />
      </Head>
      <main>
        <Hero
          backgroundUrl={"/img/grass/image5.jpeg"}
          title="Sztuczna trawa"
          subtitle={`Nawierzchnie z sztucznej trawy do kortów tenisowych to rozwiązania przyjazne środowisku i wydajne. Dzięki nam możesz cieszyć się nowoczesnością i minimalną konserwacją na swoim korcie. Dowiedz się więcej!`}
        />
        <Grass />
        <Contact />
      </main>
    </>
  );
}
