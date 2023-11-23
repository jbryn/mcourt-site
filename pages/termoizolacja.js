import Head from "next/head";
import Features from "@/components/thermo/features";
import Hero from "@/components/shared/hero/hero";
import Contact from "@/components/home/contact/contact";

export default function ThermoPage() {
  return (
    <>
      <Head>
        {/* <title>
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
        /> */}
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/ZOaQEAONR563pZsgV6dx"}
          title="Termoizolacja hal tenisowych"
          subtitle="Jesteśmy firmą, która specjalizuje się w profesjonalnym ocieplaniu hal tenisowych, zapewniając efektywne rozwiązania termiczne, które przyczyniają się do lepszej jakości gry oraz komfortu zarówno dla graczy, jak i widzów."
        />
        <Features />
        <Contact
          imageUrl={"https://media.graphassets.com/e6hLOrvmS6ux777rizz7"}
        />
      </main>
    </>
  );
}
