import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Acryl from "@/components/courts/surfaces/acryl/acryl";
import Colors from "@/components/courts/colors/colors";
import Contact from "@/components/courts/contact/contact";

export default function CourtsPage() {
  return (
    <>
      <Head>
        <title>mcourt - tenis dla profesjonalistów</title>
        <meta
          name="description"
          content="Zaawansowane nawierzchnie tenisowe akrylowe to doskonały wybór zarówno dla graczy, jak i klubów tenisowych. Oferujemy trwałe i wydajne rozwiązania, które spełnią Twoje oczekiwania."
          key="desc"
        />
        <meta
          property="og:title"
          content="Korty Tenisowe z Nawierzchnią Akrylową | Profesjonalne Rozwiązania Dla Tenisistów"
        />
        <meta
          property="og:description"
          content="Zaawansowane nawierzchnie tenisowe akrylowe to doskonały wybór zarówno dla graczy, jak i klubów tenisowych. Oferujemy trwałe i wydajne rozwiązania, które spełnią Twoje oczekiwania."
        />
        <meta property="og:image" content="./logos/mcourt-logo-color.png" />
      </Head>
      <main>
        <Hero
          backgroundUrl={"/img/acryl/mc.jpeg"}
          title="Nawierzchnie akrylowe"
          subtitle={`Zaawansowane nawierzchnie tenisowe akrylowe to doskonały wybór zarówno dla graczy, jak i klubów tenisowych. Oferujemy trwałe i wydajne rozwiązania, które spełnią Twoje oczekiwania.`}
        />
        <Acryl />
        <Colors />
        <Contact />
      </main>
    </>
  );
}
