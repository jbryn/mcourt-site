import Head from "next/head";
import Contact from "@/components/home/contact/contact";
import Grass from "@/components/courts/surfaces/grass/grass";
import Hero from "@/components/shared/hero/hero";
import Projects from "@/components/courts/surfaces/grass/projects";

import { useMediaQuery } from 'react-responsive';

const projectsData = [
  { url: "https://media.graphassets.com/AptwnlAkRqO9iHHqOFBW" },
  { url: "https://media.graphassets.com/ouMA4vsOQ1KZwbzFbmXw" },
  { url: "https://media.graphassets.com/ReP14Xq4RiC23gz84c7S" },
  { url: "https://media.graphassets.com/5t6tOxmQRYGge3Q31wcE" },
  { url: "https://media.graphassets.com/k6aTAz8RuyAw3zPucL3A" },
];

export default function GrassPage() {

  const isMediumScreen = useMediaQuery({ minWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1600 });
  const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

  const offsetY = isXLargeScreen ? '-450px' : isLargeScreen ? '-380px' : isMediumScreen ? '0px' : '0px';

  return (
    <>
      <Head>
        <title>
          Korty Tenisowe z Nawierzchnią Sztucznej Trawy | Nowoczesność i
          Minimalna Konserwacja
        </title>
        <meta
          name="description"
          content="Korty tenisowe ze sztucznej trawy to praktyczne rozwiązania, jednocześnie przyjazne środowisku.
Dzięki nam możesz cieszyć się komfortową grą w tenisa, przy minimalnej pracy wkładanej w
pielęgnację kortu. Dowiedz się więcej!"
          key="desc"
        />
        <meta
          property="og:title"
          content="Korty Tenisowe z Nawierzchnią Sztucznej Trawy | Nowoczesność i
          Minimalna Konserwacja"
        />
        <meta
          property="og:description"
          content="Korty tenisowe ze sztucznej trawy to praktyczne rozwiązania, jednocześnie przyjazne środowisku.
Dzięki nam możesz cieszyć się komfortową grą w tenisa, przy minimalnej pracy wkładanej w
pielęgnację kortu. Dowiedz się więcej!"
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
          offsetY={offsetY}
          subtitle={`Korty tenisowe ze sztucznej trawy to praktyczne rozwiązania, jednocześnie przyjazne środowisku.
Dzięki nam możesz cieszyć się komfortową grą w tenisa, przy minimalnej pracy wkładanej w
pielęgnację kortu. Dowiedz się więcej!`}
        />
        <Grass />
        <Projects />
        <Contact
          imageUrl={"https://media.graphassets.com/fDKZW0brSNSOAvU4u0tv"}
        />
      </main>
    </>
  );
}
