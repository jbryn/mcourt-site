import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Contact from "@/components/home/contact/contact";
import Antuka from "@/components/courts/surfaces/antuka/antuka";
import Projects from "@/components/courts/surfaces/antuka/projects";

import { useMediaQuery } from 'react-responsive';

const projectsData = [
  { url: "https://media.graphassets.com/ONDf21C8TLieaELcrSRC" },
  { url: "https://media.graphassets.com/pPzEbpRzT6KHsbljkPmp" },
  { url: "https://media.graphassets.com/Vvg3UnquRj0j4WhpZCJh" },
  { url: "https://media.graphassets.com/VpdQzjhMTNqq1aRJPxna" },
];

export default function AntukaPage() {

  const isMediumScreen = useMediaQuery({ minWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1600 });
  const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

  const offsetY = isXLargeScreen ? '-350px' : isLargeScreen ? '-280px' : isMediumScreen ? '0px' : '0px';

  return (
    <>
      <Head>
        <title>Korty tenisowe z mączki ceglanej</title>
        <meta
          name="description"
          content="Korty tenisowe z nawierzchnią ceglaną to harmonia tradycji i nowoczesności. Dzięki nam możesz mieć wyjątkowy kort, który sprosta wymaganiom każdego tenisisty. Dowiedz się więcej!"
          key="desc"
        />
        <meta property="og:title" content="Korty tenisowe z mączki ceglanej" />
        <meta
          property="og:description"
          content="Korty tenisowe z nawierzchnią ceglaną to harmonia tradycji i nowoczesności. Dzięki nam możesz mieć wyjątkowy kort, który sprosta wymaganiom każdego tenisisty. Dowiedz się więcej!"
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"/img/courts/image5.jpg"}
          title="Nawierzchnie ceglane"
          offsetY={offsetY}
          subtitle={`Jeśli marzysz o unikalnym doświadczeniu podczas gry w tenisa, nawierzchnia ceglana z pewnością spełni Twoje oczekiwania i zapewni niezapomniane chwile na korcie tenisowym.`}
        />
        <Antuka />
        <Projects />
        <Contact
          imageUrl={"https://media.graphassets.com/TI5dBSKRnaSPtrkOSniw"}
        />
      </main>
    </>
  );
}
