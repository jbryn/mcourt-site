import Head from "next/head";
import About from "@/components/home/about/about";
import Contact from "@/components/home/contact/contact";
import Hero from "@/components/home/hero/hero";
import Projects from "@/components/home/projects/projects";
import Surfaces from "@/components/home/surfaces/surfaces";

export default function Home() {
  return (
    <>
      <Head>
        <title>mcourt - tenis dla profesjonalistów</title>
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
        <meta property="og:image" content="./img/logos/mcourt-logo-color.png" />
      </Head>
      <main>
        <Hero />
        <Surfaces />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
