import Head from "next/head";
import Contact from "@/components/home/contact/contact";
import Hero from "@/components/shared/hero/hero";
import Features from "@/components/tennis-halls/features/features";
import Projects from "@/components/tennis-halls/projects";

import { useMediaQuery } from 'react-responsive';

export default function TennisHalls() {

  const isMediumScreen = useMediaQuery({ minWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1600 });
  const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

  const offsetY = isXLargeScreen ? '-250px' : isLargeScreen ? '-180px' : isMediumScreen ? '0px' : '0px';

  return (
    <>
      <Head>
        <title>Innowacyjne hale tenisowe drewniane z technologią łukową</title>
        <meta
          name="description"
          content="Zapewniamy unikalne hale tenisowe o konstrukcji drewnianej łukowej, łącząc trwałość z
estetyką. Zaufaj ekspertom w projektowaniu i budowie hal tenisowych"
          key="desc"
        />
        <meta
          property="og:title"
          content="Innowacyjne hale tenisowe drewniane z technologią łukową"
        />
        <meta
          property="og:description"
          content="Zapewniamy unikalne hale tenisowe o konstrukcji drewnianej łukowej, łącząc trwałość z
estetyką. Zaufaj ekspertom w projektowaniu i budowie hal tenisowych"
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/KqOodpITDqmSp6Dy1EdC"}
          title="Hale tenisowe"
          offsetY={offsetY}
          subtitle={`Nasze hale tenisowe to połączenie tradycji z nowoczesnymi osiągnięciami technologicznymi. Dzięki wieloletniemu doświadczeniu zapewnimy Ci doskonałe warunki do gry przez cały rok.`}
        />

        <Features />
        <Projects />
        <Contact
          imageUrl={"https://media.graphassets.com/I5ALCpRCTtOwMTxFCoZI"}
        />
      </main>
    </>
  );
}
