import Head from "next/head";
import About from "@/components/home/about/about";
import Contact from "@/components/home/contact/contact";
import Hero from "@/components/home/hero/hero";
import Projects from "@/components/home/projects/projects";
import Surfaces from "@/components/home/surfaces/surfaces";

const projectsData = [
  {
    url: "https://media.graphassets.com/sjk72IyQxC8zD8U682BL",
    title: "Budowa kompleksu czterech kortów tenisowych w Łaźniewku",
    link: "/korty-lazniewek",
  },
  {
    url: "https://media.graphassets.com/awYLvtSNmg72UZ4Do0wA",
    title: "Hale tenisowe w Grodzisku Mazowieckim",
    link: "/hale-tenisowe-grodzisk",
  },
  {
    url: "https://media.graphassets.com/7wafg69TWKhh99kz1lUv",
    title: "Budowa 11 kortów w Akademii Tenisa Kozerkii",
    link: "/akademia-tenisa-kozerki",
  },
  {
    url: "https://media.graphassets.com/koc9lQ9QRZenqAQtl7JY",
    title: "2022 Renowacja nawierzchni na Warszawiance",
    link: "/",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>MCOURT | Tenis dla profesjonalistów</title>
        <meta
          name="description"
          content="Doświadcz jakości i precyzji wykonania naszych kortów"
          key="desc"
        />
        <meta property="og:title" content="Tenis dla profesjonalistów" />
        <meta
          property="og:description"
          content="Doświadcz jakości i precyzji wykonania naszych kortów"
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main>
        <Hero
          backgroundUrl={"https://media.graphassets.com/9Z9cIdMQHqMAFQabQ9gz"}
          title="Jakość, doświadczenie i precyzja"
          subtitle={`Budujemy korty tenisowe od 2008 roku, naszym klientom proponujemy rozwiązania najlepszych światowych producentów`}
        />
        <Surfaces />
        <About />
        <Projects title="Nasze projekty" data={projectsData} />
        <Contact />
      </main>
    </>
  );
}
