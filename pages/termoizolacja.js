import Head from "next/head";
import Features from "@/components/thermo/features";
import Hero from "@/components/shared/hero/hero";
import Contact from "@/components/home/contact/contact";

import { useMediaQuery } from 'react-responsive';


export default function ThermoPage() {


  const isMediumScreen = useMediaQuery({ minWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1600 });
  const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

  const offsetY = isXLargeScreen ? '-350px' : isLargeScreen ? '-280px' : isMediumScreen ? '0px' : '0px';

  return (
    <>
      <Head>
        <title>
          Termoizolacja hal tenisowych: optymalne rozwiązania dla komfortu i
          efektywności energetycznej
        </title>
        <meta
          name="description"
          content="Kompleksowe podejście do termoizolacji hal tenisowych - Nasza firma oferuje nowoczesne technologie, zapewniając optymalną izolację cieplną. Zainwestuj w efektywne rozwiązania dla długotrwałego komfortu."
          key="desc"
        />
        <meta
          property="og:title"
          content="Termoizolacja hal tenisowych: optymalne rozwiązania dla komfortu i efektywności energetycznej"
        />
        <meta
          property="og:description"
          content="Kompleksowe podejście do termoizolacji hal tenisowych - Nasza firma oferuje nowoczesne technologie, zapewniając optymalną izolację cieplną. Zainwestuj w efektywne rozwiązania dla długotrwałego komfortu."
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/ZOaQEAONR563pZsgV6dx"}
          title="Termoizolacja hal tenisowych"
          offsetY={offsetY}
          subtitle="Jesteśmy firmą, która specjalizuje się w profesjonalnym ocieplaniu hal tenisowych, zapewniając efektywne rozwiązania termiczne, które przyczyniają się do lepszej jakości gry oraz komfortu zarówno dla graczy, jak i widzów."
        />
        <Features />
        <Contact
          imageUrl={"https://media.graphassets.com/e6hLOrvmS6ux777rizz7"}
        />
      </main>
    </>
  );
}
