import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Acryl from "@/components/courts/surfaces/acryl/acryl";
import Colors from "@/components/courts/colors/colors";
import Contact from "@/components/home/contact/contact";
import Video from "@/components/courts/video/video";
import Projects from "@/components/courts/surfaces/acryl/projects";

export default function AcrylPage() {
  return (
    <>
      <Head>
        <title>
          Korty Tenisowe z Nawierzchnią Akrylową | Profesjonalne Rozwiązania Dla
          Tenisistów
        </title>
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
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/TWccffsSSnqbssKirR3g"}
          title="Nawierzchnie akrylowe"
          subtitle={`Zaawansowane nawierzchnie tenisowe akrylowe to doskonały wybór zarówno dla graczy, jak i klubów tenisowych. Oferujemy trwałe i wydajne rozwiązania, które spełnią Twoje oczekiwania.`}
        />
        <Acryl />
        <Colors />
        <Projects />
        <Video />
        <Contact
          imageUrl={"https://media.graphassets.com/e6hLOrvmS6ux777rizz7"}
        />
      </main>
    </>
  );
}
