import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Features from "@/components/pickelball/features";
import Contact from "@/components/home/contact/contact";

export default function CourtsPage() {
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
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"/img/pickelball/hero.jpg"}
          title="Pickelball"
          subtitle={`Lorem ipsum dolor sit amet consectetur. Nibh suspendisse aliquam sed
          libero eu faucibus commodo sagittis. Sit accumsan et mauris fringilla
          elementum elit interdum scelerisque consectetur.`}
        />
        <Features />
        <Contact />
      </main>
    </>
  );
}
