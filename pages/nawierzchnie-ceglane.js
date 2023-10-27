import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Contact from "@/components/home/contact/contact";
import Antuka from "@/components/courts/surfaces/antuka/antuka";

export default function CourtsPage() {
  return (
    <>
      <Head>
        <title>Korty tenisowe z mączki ceglanej</title>
        <meta
          name="description"
          content="Korty tenisowe z nawierzchnią ceglaną to harmonia tradycji i nowoczesności. Dzięki nam możesz mieć wyjątkowy kort, który sprosta wymaganiom każdego tenisisty. Dowiedz się więcej!"
          key="desc"
        />
        <meta property="og:title" content="Korty tenisowe z mączki ceglanej" />
        <meta
          property="og:description"
          content="Korty tenisowe z nawierzchnią ceglaną to harmonia tradycji i nowoczesności. Dzięki nam możesz mieć wyjątkowy kort, który sprosta wymaganiom każdego tenisisty. Dowiedz się więcej!"
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"/img/courts/image5.jpg"}
          title="Nawierzchnie ceglane"
          subtitle={`Jeśli marzysz o unikalnym doświadczeniu podczas gry w tenisa, nawierzchnia ceglana z pewnością spełni Twoje oczekiwania i zapewni niezapomniane chwile na korcie tenisowym.`}
        />
        <Antuka />
        <Contact />
      </main>
    </>
  );
}
