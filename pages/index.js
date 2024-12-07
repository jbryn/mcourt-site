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
          backgroundUrl={"https://media.graphassets.com/jujSnbwbTayd5QhAATWd"}
          title="Jakość, doświadczenie i precyzja"
          subtitle={`Tenis jest naszą pasją,  dlatego od 2008 roku budujemy dla Was najlepsze korty tenisowe i oferujemy najlepsze rozwiązania światowych producentów w tej dziedzinie.`}
        />
        <Surfaces />
        <About />
        <Projects />
        <Contact
          imageUrl={"https://media.graphassets.com/TI5dBSKRnaSPtrkOSniw"}
        />
      </main>
    </>
  );
}
