import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Surfaces from "@/components/courts/surfaces/surfaces";
import Contact from "@/components/home/contact/contact";

import { useMediaQuery } from 'react-responsive';


export default function CourtsPage() {
  const isMediumScreen = useMediaQuery({ minWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1600 });
  const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

  const offsetY = isXLargeScreen ? '-350px' : isLargeScreen ? '-280px' : isMediumScreen ? '0px' : '0px';

  return (
    <>
      <Head>
        <title>
          Budowa kortów tenisowych, profesjonalne nawierzchnie do tenisa
        </title>
        <meta
          name="description"
          content="W naszej ofercie posiadamy nawierzchnie do tenisa czołowych światowych producentów. Wykonujemy bezpłatne wyceny i pomiary przed rozpoczęciem inwestycji."
          key="desc"
        />
        <meta
          property="og:title"
          content="Budowa kortów tenisowych, profesjonalne nawierzchnie do tenisa"
        />
        <meta
          property="og:description"
          content="W naszej ofercie posiadamy nawierzchnie do tenisa czołowych światowych producentów. Wykonujemy bezpłatne wyceny i pomiary przed rozpoczęciem inwestycji."
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"/img/courts/image5.jpg"}
          title="Korty tenisowe"
          offsetY={offsetY}
          subtitle={`Budowa kortów tenisowych to nasza specjalność. Oferujemy najlepsze nawierzchnie tenisowe i profesjonalizm w każdym projekcie. Skontaktuj się z nami już dziś i wybuduj swój wymarzony kort.`}
        />

        <Surfaces />
        <Contact
          imageUrl={"https://media.graphassets.com/1KCpwNOQ32At08N8oPDK"}
        />
      </main>
    </>
  );
}
