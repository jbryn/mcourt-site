import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";

const images = [
  "https://media.graphassets.com/Yfa2RTBoQcHwLnqQoiQw",
  "https://media.graphassets.com/VWVLrNlwQBysEu8l5IYB",
  "https://media.graphassets.com/pLk2P1QITDKXuJCVbz0Y",

  "https://media.graphassets.com/Zp03T6H7SHClcY7EKOao",
  "https://media.graphassets.com/awYLvtSNmg72UZ4Do0wA",
  "https://media.graphassets.com/rkGx1JyCTod3TXp4oxrE",

  "https://media.graphassets.com/BqgBOqDCR8eK3sobgOTr",
  "https://media.graphassets.com/MO2dJ7pjSeaebuGo0eBg",
  "https://media.graphassets.com/N7zHBCuQR6wDTOURKMLg",
];

export default function GrodziskPage() {
  return (
    <>
      <Head>
        <title>Odkryj nowe hale tenisowe z nawierzchnią Laykold</title>
        <meta
          name="description"
          content="Zbudowane we wrześniu 2023 roku hale tenisowe w Grodzisku Mazowieckim, oferują innowacyjną nawierzchnię Laykold Masters 5 dla doskonałych wrażeń z gry. Dołącz do naszej pasji tenisa!"
          key="desc"
        />
        <meta
          property="og:title"
          content="Odkryj nowe hale tenisowe z nawierzchnią Laykold"
        />
        <meta
          property="og:description"
          content="Zbudowane we wrześniu 2023 roku hale tenisowe w Grodzisku Mazowieckim, oferują innowacyjną nawierzchnię Laykold Masters 5 dla doskonałych wrażeń z gry. Dołącz do naszej pasji tenisa!"
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/XGvyv53ORjqnVccqdm27"}
          title="Hale tenisowe w Grodzisku Mazowieckim"
          subtitle="Zbudowane we wrześniu 2023 roku hale tenisowe w Grodzisku Mazowieckim, oferują innowacyjną nawierzchnię Laykold Masters 5 dla doskonałych wrażeń z gry. Dołącz do naszej pasji tenisa!"
        />
        <section className="grid place-items-center pb-[100px]">
          <div className="flex flex-col text-center gap-[60px] px-[40px] max-w-[1000px]">
            <h1 className="text-[26px] font-bold">
              Z radością ogłaszamy ukończenie projektu budowy dwóch nowoczesnych
              hal tenisowych w malowniczym Grodzisku Mazowieckim. Prace zostały
              zakończone we wrześniu 2023 roku, przynosząc nową erę tenisa do
              lokalnej społeczności.
            </h1>
            <div className="flex text-start gap-[100px]">
              <h2>
                Nowe hale tenisowe w Grodzisku Mazowieckim są wyjątkowe nie
                tylko ze względu na swoje innowacyjne podejście do architektury,
                ale także dzięki zastosowaniu najnowszej technologii nawierzchni
                tenisowej - Laykold Masters 5. Ta syntetyczna nawierzchnia znana
                z trwałości, elastyczności i doskonałych właściwości gry, stanie
                się miejscem inspirującym zarówno dla początkujących, jak i
                doświadczonych tenisistów
              </h2>
              <h2>
                Nasza firma, z pasją i zaangażowaniem, zadbała o każdy aspekt
                budowy, począwszy od gruntownego przygotowania terenu, poprzez
                nowoczesną konstrukcję hal, aż po precyzyjne wykonanie
                nawierzchni tenisowej Laykold. Dzięki temu możemy z dumą
                dostarczyć społeczności Grodziska Mazowieckiego nowoczesne i
                funkcjonalne obiekty tenisowe.
              </h2>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 justify-center justify-items-center gap-[10px] px-[20px]">
          {images.map((image, index) => (
            <Image
              className={`lg:h-[330px] rounded-[15px] ${
                index % 2 == 0 ? "justify-self-end" : "justify-self-start"
              }`}
              key={index}
              src={image}
              width={440}
              height={306}
              alt={image}
            />
          ))}
        </section>
        <Contact
          imageUrl={"https://media.graphassets.com/e6hLOrvmS6ux777rizz7"}
        />
      </main>
    </>
  );
}
