import Head from "next/head";
import Features from "@/components/lights/features";
import Hero from "@/components/shared/hero/hero";
import Contact from "@/components/home/contact/contact";

import { useMediaQuery } from 'react-responsive';


export default function LightsPage() {

  const isMediumScreen = useMediaQuery({ minWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1600 });
  const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

  const offsetY = isXLargeScreen ? '-250px' : isLargeScreen ? '-180px' : isMediumScreen ? '0px' : '0px';

  return (
    <>
      <Head>
        <title>
          Oświetlenie kortów tenisowych: zapewnij komfort na wysokim poziomie!
        </title>
        <meta
          name="description"
          content="Przygotujemy dla Ciebie spersonalizowany projekt oświetlenia, dostosowany do Twoich indywidualnych potrzeb"
          key="desc"
        />
        <meta
          property="og:title"
          content="Oświetlenie kortów tenisowych: zapewnij komfort na wysokim poziomie!"
        />
        <meta
          property="og:description"
          content="Przygotujemy dla Ciebie spersonalizowany projekt oświetlenia, dostosowany do Twoich indywidualnych potrzeb"
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/BdbjrYbGTZucYFv2c6TI"}
          title="Oświetlenie kortów"
          offsetY={offsetY}
          subtitle="Doświetl swój kort tenisowy już dziś i ciesz się możliwością gry po zmroku, sprawdź propozycję naszych rozwiązań!"
        />
        <Features />
        <Contact
          imageUrl={"https://media.graphassets.com/e6hLOrvmS6ux777rizz7"}
        />
      </main>
    </>
  );
}
