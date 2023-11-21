import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Acryl from "@/components/courts/surfaces/acryl/acryl";
import Colors from "@/components/courts/colors/colors";
import Contact from "@/components/home/contact/contact";
import Video from "@/components/courts/video/video";
import Testimonials from "@/components/home/testimonials/testimonials";

const projectsData = [
  "https://media.graphassets.com/mZy0ynBSD6RUj33fDnum",
  "https://media.graphassets.com/0DLZTnN9T7WHVj9l9PM4",
  "https://media.graphassets.com/8M0sy7f5SniDaCsADDfe",
  "https://media.graphassets.com/CmpprxbTTgSuH5KzBgzc",
  "https://media.graphassets.com/8eeBzOquQJGfdhyTD6XB",
  "https://media.graphassets.com/93oYNjYxSZq0mafoy0P7",
];

export default function CourtsPage() {
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
          backgroundUrl={"https://media.graphassets.com/DNY47dV6QkOmarTqGhjY"}
          title="Nawierzchnie akrylowe"
          subtitle={`Zaawansowane nawierzchnie tenisowe akrylowe to doskonały wybór zarówno dla graczy, jak i klubów tenisowych. Oferujemy trwałe i wydajne rozwiązania, które spełnią Twoje oczekiwania.`}
        />
        <Video />
        <Acryl />
        <Colors />
        <Testimonials title="Wybrane realizacje" data={projectsData} />
        <Contact />
      </main>
    </>
  );
}
