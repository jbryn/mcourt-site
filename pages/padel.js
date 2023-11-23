import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Contact from "@/components/home/contact/contact";
import Features from "@/components/padel/features";

export default function PadelPage() {
  return (
    <>
      <Head>
        <title>Budowa i montaż klatek i boiska do padla</title>
        <meta
          name="description"
          content="Tworzymy perfekcyjne boiska do padla. Odkryj naszą ofertę i zainstaluj najwyższej jakości klatki do Padla, w ofercie różne systemy, błyskawiczna realizacja"
          key="desc"
        />
        <meta
          property="og:title"
          content="Budowa i montaż klatek i boiska do padla"
        />
        <meta
          property="og:description"
          content="Tworzymy perfekcyjne boiska do padla. Odkryj naszą ofertę i zainstaluj najwyższej jakości klatki do Padla, w ofercie różne systemy, błyskawiczna realizacja"
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl="https://media.graphassets.com/tIO27usQHaiZ3ooTqjyy"
          title="Padel"
          subtitle="Specjalizujemy się w kompleksowej budowie boisk do padla. Serdecznie zachęcamy do zapoznania się z naszą ofertą oraz do nawiązania kontaktu. Nasz zespół z przyjemnością udzieli odpowiedzi na wszystkie pytania."
        />
        <Features />
        <Contact
          imageUrl={"https://media.graphassets.com/ouPi12eTUWTkM7aIvyIx"}
        />
      </main>
    </>
  );
}
