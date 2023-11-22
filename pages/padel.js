import Hero from "@/components/shared/hero/hero";
import Contact from "@/components/home/contact/contact";
import Features from "@/components/padel/featues";

export default function CourtsPage() {
  return (
    <main className="overflow-hidden">
      <Hero
        backgroundUrl="https://media.graphassets.com/tIO27usQHaiZ3ooTqjyy"
        title="Padel"
        subtitle="Specjalizujemy się w kompleksowej budowie boisk do padla. Serdecznie zachęcamy do zapoznania się z naszą ofertą oraz do nawiązania kontaktu. Nasz zespół z przyjemnością udzieli odpowiedzi na wszystkie pytania."
      />
      <Features />
      <Contact />
    </main>
  );
}
