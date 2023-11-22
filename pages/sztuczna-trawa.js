import Head from "next/head";
import Contact from "@/components/home/contact/contact";
import Grass from "@/components/courts/surfaces/grass/grass";
import Hero from "@/components/shared/hero/hero";
import Projects from "@/components/home/projects/projects";

const projectsData = [
  { url: "https://media.graphassets.com/AptwnlAkRqO9iHHqOFBW" },
  { url: "https://media.graphassets.com/ouMA4vsOQ1KZwbzFbmXw" },
  { url: "https://media.graphassets.com/ReP14Xq4RiC23gz84c7S" },
  { url: "https://media.graphassets.com/5t6tOxmQRYGge3Q31wcE" },
  { url: "https://media.graphassets.com/k6aTAz8RuyAw3zPucL3A" },
];

export default function GrassPage() {
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
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/lzIgAVGTdq9GhkwCY46e"}
          title="Sztuczna trawa"
          subtitle={`Nawierzchnie z sztucznej trawy do kortów tenisowych to rozwiązania przyjazne środowisku i wydajne. Dzięki nam możesz cieszyć się nowoczesnością i minimalną konserwacją na swoim korcie. Dowiedz się więcej!`}
        />
        <Grass />
        <Projects title="Wybrane realizacje" data={projectsData} />
        <Contact />
      </main>
    </>
  );
}
