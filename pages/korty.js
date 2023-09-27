import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Surfaces from "@/components/courts/surfaces/surfaces";
import Contact from "@/components/courts/contact/contact";

export default function CourtsPage() {
  return (
    <>
      <Head>
        <title>mcourt - tenis dla profesjonalistów</title>
        <meta
          name="description"
          content="W naszej ofercie posiadamy nawierzchnie do tenisa czołowych światowych producentów. Wykonujemy bezpłatne wyceny i pomiary przed rozpoczęciem inwestycji."
          key="desc"
        />
        <meta
          property="og:title"
          content="Budowa kortów tenisowych, profesjonalne nawierzchnie do tenisa"
        />
        <meta
          property="og:description"
          content="W naszej ofercie posiadamy nawierzchnie do tenisa czołowych światowych producentów. Wykonujemy bezpłatne wyceny i pomiary przed rozpoczęciem inwestycji."
        />
        <meta property="og:image" content="./img/logos/mcourt-logo-color.png" />
      </Head>
      <main>
        <Hero
          backgroundUrl={"/img/courts/image5.png"}
          title="Korty tenisowe"
          subtitle={`Budowa kortów tenisowych to nasza specjalność. Oferujemy najlepsze nawierzchnie tenisowe i profesjonalizm w każdym projekcie. Skontaktuj się z nami już dziś i wybuduj swój wymarzony kort.`}
        />

        <Surfaces />
        <Contact />
      </main>
    </>
  );
}
