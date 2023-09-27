import Head from "next/head";
import Contact from "@/components/courts/contact/contact";
import Hero from "@/components/shared/hero/hero";
import Features from "@/components/tennis-halls/features/features";
import Testimonials from "@/components/home/testimonials/testimonials";

export default function TennisHalls() {
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
        <meta property="og:image" content="./img/logos/mcourt-logo-color.png" />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"/img/tennis-halls/hero.jpeg"}
          title="Hale tenisowe"
          subtitle={`Nasze hale tenisowe to połączenie tradycji drewna z nowoczesnymi osiągnięciami
        technologicznymi. Dzięki naszemu doświadczeniu zapewnimy Ci doskonałe warunki do gry przez cały
        rok.`}
        />
        <Features />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
