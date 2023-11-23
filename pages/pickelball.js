import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Features from "@/components/pickelball/features";
import Contact from "@/components/home/contact/contact";

export default function PickelballPage() {
  return (
    <>
      <Head>
        <title>Budowa kortów do gry w pickleballa</title>
        <meta
          name="description"
          content="Innowacyjne podejście do budowy kortów Pickleball - Jesteśmy liderem branży, oferując najnowsze technologie i profesjonalne doradztwo. Z nami Twój kort będzie unikatowy!"
          key="desc"
        />
        <meta
          property="og:title"
          content="Budowa kortów do gry w pickleballa"
        />
        <meta
          property="og:description"
          content="Innowacyjne podejście do budowy kortów Pickleball - Jesteśmy liderem branży, oferując najnowsze technologie i profesjonalne doradztwo. Z nami Twój kort będzie unikatowy!"
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/S0RCqG6qRsWaaazuDfiJ"}
          title="Kort do gry w pickleballa"
          subtitle="Jesteśmy zespołem pasjonatów, którzy nie tylko projektują, ale także z radością realizują unikatowe korty do pickleballa. Jeśli jesteś miłośnikiem tej dynamicznej gry, to trafiłeś we właściwe miejsce!"
        />
        <Features />
        <Contact
          imageUrl={"https://media.graphassets.com/Bri7G1DtQ7q2gsMHjqaw"}
        />
      </main>
    </>
  );
}
