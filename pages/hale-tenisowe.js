import Head from "next/head";
import Contact from "@/components/home/contact/contact";
import Hero from "@/components/shared/hero/hero";
import Features from "@/components/tennis-halls/features/features";
import Testimonials from "@/components/home/testimonials/testimonials";

const projectsData = [
  "https://media.graphassets.com/QIYXFxp0QeiBHvnVaIbL",
  "https://media.graphassets.com/nciChFGRteYeOK4FaagL",
  "https://media.graphassets.com/0uLoNuBQQc2hAQgYxBbH",
  "https://media.graphassets.com/capKKKNKSEen71jYRO1n",
  "https://media.graphassets.com/mc2y6CaGTwarVjDk00K7",
  "https://media.graphassets.com/VTLPIVQ1RJ2WvqdcLUyO",
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
          backgroundUrl={"https://media.graphassets.com/UeL4wKjETsGk1FFJFbLh"}
          title="Hale tenisowe"
          subtitle={`Nasze hale tenisowe to połączenie tradycji drewna z nowoczesnymi osiągnięciami
        technologicznymi. Dzięki naszemu doświadczeniu zapewnimy Ci doskonałe warunki do gry przez cały
        rok.`}
        />

        <Features />
        <Testimonials title="Wybrane projekty" data={projectsData} />
        <Contact />
      </main>
    </>
  );
}
