import Head from "next/head";
import Contact from "@/components/home/contact/contact";
import Hero from "@/components/shared/hero/hero";
import Features from "@/components/tennis-halls/features/features";
import Projects from "@/components/tennis-halls/projects";

const projectsData = [
  { url: "https://media.graphassets.com/NqE8aa8kTn2Hc5oPqTg9" },
  { url: "https://media.graphassets.com/bZASIQhuRuhmzDjiP8jO" },
  { url: "https://media.graphassets.com/1XUaTUQSoiNUmsM6tZMs" },
  { url: "https://media.graphassets.com/bmrPQqETxP19Y4QhRTZA" },
  { url: "https://media.graphassets.com/srzOtiBkQrOm6qzldfuv" },
  { url: "https://media.graphassets.com/yx9MBd5xTU648pLVI7i3" },
];

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
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/KqOodpITDqmSp6Dy1EdC"}
          title="Hale tenisowe"
          subtitle={`Nasze hale tenisowe to połączenie tradycji drewna z nowoczesnymi osiągnięciami
        technologicznymi. Dzięki naszemu doświadczeniu zapewnimy Ci doskonałe warunki do gry przez cały
        rok.`}
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
