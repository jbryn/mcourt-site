import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Features from "@/components/pickelball/features";
import Contact from "@/components/home/contact/contact";

export default function PickelballPage() {
  return (
    <>
      <Head>
        {/* <title>MCOURT | Tenis dla profesjonalistów</title>
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
        /> */}
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/S0RCqG6qRsWaaazuDfiJ"}
          title="Kort do gry w pickleballa"
          subtitle="Jesteśmy zespołem pasjonatów, którzy nie tylko projektują, ale także z radością realizują unikatowe korty do pickleballa. Jeśli jesteś miłośnikiem tej dynamicznej gry, to trafiłeś we właściwe miejsce!"
        />
        <Features />
        <Contact />
      </main>
    </>
  );
}
