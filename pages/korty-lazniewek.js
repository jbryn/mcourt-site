import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";

const images = [
  "https://media.graphassets.com/SxaS4LrrTyixUHocozXq",
  "https://media.graphassets.com/LA1Z0pQeTPSiT3rQ6edR",
  "https://media.graphassets.com/r4TRVtSPRyOHXAFtBAHL",

  "https://media.graphassets.com/gS7Q3W6FS2iw7FO3XId3",
  "https://media.graphassets.com/JBZnV8rTuyKFti26a8vk",
  "https://media.graphassets.com/skOSvJXSdWqSibZFUE7w",

  "https://media.graphassets.com/zotjJargQfusS7eMlr2A",
  "https://media.graphassets.com/lhr6BR6YSJOj7sDsRle8",
  "https://media.graphassets.com/yOCCTgZxTYqZ4sbcInFD",
];

export default function LazniewekPage() {
  return (
    <>
      <Head>
        <title>Klub Kortmax w Błoniach już otwarty!</title>
        <meta
          name="description"
          content="W maju 2023 roku nasza firma wybudowała nowoczesny obiekt tenisowy w Błoniach, k. Warszawy. Cieszymy się, że mogliśmy przyczynić się do rozwoju tenisa w tej okolicy!"
          key="desc"
        />
        <meta
          property="og:title"
          content="Klub Kortmax w Błoniach już otwarty!"
        />
        <meta
          property="og:description"
          content="W maju 2023 roku nasza firma wybudowała nowoczesny obiekt tenisowy w Błoniach, k. Warszawy. Cieszymy się, że mogliśmy przyczynić się do rozwoju tenisa w tej okolicy!"
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/yBN8vHdRx2UCRMmu6aBQ"}
          title="Klub Kortmax w Błoniach już otwarty!"
          subtitle="W maju 2023 roku nasza firma wybudowała nowoczesny obiekt tenisowy w Błoniach, k. Warszawy. Cieszymy się, że mogliśmy przyczynić się do rozwoju tenisa w tej okolicy!"
        />
        <section className="grid place-items-center pb-[100px]">
          <div className="flex flex-col text-center gap-[60px] px-[40px] max-w-[1000px]">
            <h1 className="text-[26px] font-bold">
              Cieszymy się ogromnie ogłaszając otwarcie wybudowanego przez naszą
              firmę najnowszego obiektu tenisowego, który został udostępniony
              dla użytkowników w maju 2023 roku. Zlokalizowany w malowniczych
              Błoniach, k. Warszawy, ten obiekt to prawdziwy raj dla miłośników
              tenisa.
            </h1>
            <div className="flex text-start gap-[100px]">
              <h2>
                Nowoczesny obiekt oferuje różnorodność dla graczy, dysponując
                dwoma zadaszonymi halami łukowymi, na których znajdują się korty
                Laykold Masters 5. To zapewnia doskonałe warunki gry niezależnie
                od pogody. Dodatkowo, obiekt posiada dwa zewnętrzne korty z
                nawierzchnią Antuka Premium, dla tych, którzy cenią świeże
                powietrze i naturalne oświetlenie.
              </h2>
              <h2>
                Korty Laykold Masters 5 to synonim trwałości i doskonałych
                właściwości gry, podczas gdy nawierzchnia Antuka Premium
                dostarcza autentyczne doznania z gry na kortach ziemnych. Obiekt
                Kortmax został starannie zaprojektowany, aby sprostać
                oczekiwaniom zarówno początkujących, jak i doświadczonych
                tenisistów.
              </h2>
            </div>
            <h2>
              Jesteśmy dumni z faktu, że mogliśmy przyczynić się do rozwoju
              tenisa w lokalnej społeczności. Zapraszamy zarówno miłośników tej
              dyscypliny, jak i osoby, które dopiero zaczynają swoją przygodę z
              tenisem. Korty tenisowe Kortmax to miejsce, gdzie sport staje się
              pasją, a każdy ma szansę odkryć radość gry na kortach wykonanych z
              pasji.
            </h2>
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
          imageUrl={"https://media.graphassets.com/fDKZW0brSNSOAvU4u0tv"}
        />
      </main>
    </>
  );
}
