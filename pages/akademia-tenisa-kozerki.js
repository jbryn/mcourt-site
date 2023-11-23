import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";

const images = [
  "https://media.graphassets.com/7nnD8jwgQOOAuq4YxdP0",
  "https://media.graphassets.com/ZhPVJMJTTepB8Yr4qY2w",
  "https://media.graphassets.com/z8vaQ1owSYGvPVkEJ2dQ",

  "https://media.graphassets.com/6zdfJcvYTTusUqd1yNIv",
  "https://media.graphassets.com/1yqLt0nETAWTNWZSsCOk",
  "https://media.graphassets.com/F9CS6f7FRfygYiXtfPLA",

  "https://media.graphassets.com/gs34MU9GTwKLQaINQ8cj",
  "https://media.graphassets.com/a4x2lkVlTROxtYYwHrhc",
  "https://media.graphassets.com/F9CS6f7FRfygYiXtfPLA",

  "https://media.graphassets.com/bn1IV2mHQeGwkkXAFSp3",
  "https://media.graphassets.com/BVoXKfOjRXy17s3tQYXM",
  "https://media.graphassets.com/GvLJJqdBTjKG6Nhtcbjg",

  "https://media.graphassets.com/PeyAHCIVSDuh6wiqRpcW",
  "https://media.graphassets.com/77PI8UfKRjm8tmKZTCSz",
];

export default function KozerkiPage() {
  return (
    <>
      <Head>
        <title>Budowa 11 kortów z nawierzchnią Laykold w Kozerkach</title>
        <meta
          name="description"
          content="Odkryj nasze najnowsze projekty budowy 11 nowoczesnych kortów tenisowych w Polskim Centrum Szkoleniowym Tenisa w 2022 roku. Zapraszamy do obejrzenia fotorelacji z realizacji prac."
          key="desc"
        />
        <meta
          property="og:title"
          content="Budowa 11 kortów z nawierzchnią Laykold w Kozerkach"
        />
        <meta
          property="og:description"
          content="Odkryj nasze najnowsze projekty budowy 11 nowoczesnych kortów tenisowych w Polskim Centrum Szkoleniowym Tenisa w 2022 roku. Zapraszamy do obejrzenia fotorelacji z realizacji prac."
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/bShBpJ9kSDWOJtBLan6W"}
          title="Budowa 11 kortów w Akademii Tenisa Kozerkii"
          subtitle="Rok budowy: 2022"
        />
        <section className="grid place-items-center pb-[100px]">
          <div className="flex flex-col text-center gap-[60px] px-[40px] max-w-[1000px]">
            <h1 className="text-[26px] font-bold">
              Z dumą ogłaszamy, że w ciągu roku 2022 zrealizowaliśmy projekt
              budowy 11 nowoczesnych kortów tenisowych w renomowanym Polskim
              Centrum Szkoleniowym Tenisa.
            </h1>
            <div className="flex text-start gap-[100px]">
              <h2>
                Nasza krótka fotorelacja przedstawia nie tylko efekt końcowy,
                ale również krok po kroku proces budowy, od przygotowania terenu
                po ostatnie szlify. Każdy kort został starannie zaprojektowany,
                uwzględniając zarówno aspekty techniczne, jak i estetyczne.
                Dbamy o każdy detal, aby zapewnić doskonałe warunki gry i
                wyjątkową atmosferę.
              </h2>
              <h2>
                Zapraszamy do obejrzenia zdjęć, które przedstawiają naszą pracę
                w pełnej krasie. Jeśli mają Państwo jakiekolwiek pytania lub
                chcielibyście dowiedzieć się więcej o naszych projektach,
                serdecznie zachęcamy do kontaktu. Jesteśmy gotowi odpowiedzieć
                na wszystkie Państwa zapytania i podzielić się naszym
                doświadczeniem.
              </h2>
            </div>
            <h3 className="text-[26px] font-bold">
              Dziękujemy za zaufanie i możliwość uczestnictwa w tworzeniu
              wyjątkowych miejsc do uprawiania tenisa. Razem tworzymy
              przestrzenie, gdzie sport staje się prawdziwą pasją!
            </h3>
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
        <Contact />
      </main>
    </>
  );
}
