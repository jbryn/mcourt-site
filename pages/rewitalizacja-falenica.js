import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";

const images = [
  "https://media.graphassets.com/dosrCi06TSqRKT7XG80l",
  "https://media.graphassets.com/fppk9kcQMHpZKsidBMJg",
  "https://media.graphassets.com/ro7c29gcRhUyhTe47tf5",

  "https://media.graphassets.com/nKPCDmibTJKjhAti71Rt",
  "https://media.graphassets.com/PYO7S8LQTyGkMJYZyaTa",
  "https://media.graphassets.com/0vJtMy8iToeGU0K9YGjE",

  "https://media.graphassets.com/C6cQXjp4TVusTBRiLcSm",
  "https://media.graphassets.com/aV2nuZLSPW5XYBWWACmw",
  "https://media.graphassets.com/RU556ISKa3iddOwqA4UQ",
];

export default function FalenicaPage() {
  return (
    <>
      <Head>
        <title>Generalny remont 3 kortów tenisowych</title>
        <meta
          name="description"
          content="Firma mcourt wykonała generalny remont trzech kortów tenisowych z mączki ceglanej. Zobacz fotorelację z wykonanego remontu."
          key="desc"
        />
        <meta
          property="og:title"
          content="Generalny remont 3 kortów tenisowych"
        />
        <meta
          property="og:description"
          content="Firma mcourt wykonała generalny remont trzech kortów tenisowych z mączki ceglanej. Zobacz fotorelację z wykonanego remontu."
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero
          backgroundUrl={"https://media.graphassets.com/R7EYtiNvQENL3Ly3VdqU"}
          title="Generalny remont 3 kortów tenisowych w Falenicy"
          subtitle=" Firma MCourt wykonała generalny remont trzech kortów tenisowych z mączki ceglanej. Zobacz fotorelację z wykonanego remontu."
        />
        <section className="grid place-items-center">
          <div className="flex flex-col text-center gap-[60px] px-[40px] max-w-[1000px]">
            <h1 className="text-[26px] font-bold">
              Przez ostatni rok pracowaliśmy nad przekształceniem istniejącej
              infrastruktury, aby dostarczyć nowe, inspirujące doświadczenia
              tenisowe.
            </h1>
            <div className="flex flex-col gap-[40px] text-start">
              <h2>
                <p className="font-bold">
                  Najnowocześniejsza Nawierzchnia Antuka Premium:
                </p>
                Zmieniliśmy zużytą nawierzchnię ceglaną na nowoczesną Antuka
                Premium, gwarantującą doskonałe warunki gry i komfort dla
                zawodników na każdym poziomie zaawansowania.
              </h2>
              <h2>
                <p className="font-bold">
                  Innowacyjne Oświetlenie i Zraszanie:
                </p>
                Wprowadziliśmy nową erę oświetlenia na kortach, osiągając
                natężenie światła na poziomie 300 lx, co umożliwia rozgrywanie
                meczów nawet po zmroku. Dodatkowo, zainstalowaliśmy w pełni
                zautomatyzowany system zraszania, dbając o optymalne warunki
                nawierzchni w każdych warunkach atmosferycznych.
              </h2>
              <h2>
                <p className="font-bold">
                  Panelowe Ogrodzenie dla Bezpieczeństwa i Estetyki:
                </p>
                Nowoczesne korty zasługują na nowoczesne otoczenie. Dlatego
                wymieniliśmy system ogrodzenia na panele, zapewniając nie tylko
                bezpieczeństwo, ale także estetyczny wygląd obiektu.
              </h2>
            </div>
            <h3 className="text-[26px] font-bold">
              Zapraszamy do doświadczania świeżości i doskonałej gry na
              odnowionych kortach tenisowych Ośrodka TKKF Falenica. Niech każdy
              mecz stanie się niezapomnianym wydarzeniem! Poniżej zamieszczamy
              zdjęcia przed i po wykonaniu remontu.
            </h3>
          </div>
        </section>
        <section>
          <div className="grid place-items-center gap-[20px] p-[20px]">
            <p>Przed: </p>
            <div className="flex gap-[20px] overflow-scroll">
              <Image
                className="rounded-[15px]"
                src={images[0]}
                width={340}
                height={206}
                alt="przed"
              />
              <Image
                className="rounded-[15px]"
                src={images[2]}
                width={340}
                height={206}
                alt="przed"
              />
            </div>
            <Image
              className="rounded-[15px]"
              src={images[1]}
              width={700}
              height={566}
              alt="przed"
            />
          </div>
        </section>
        <section>
          <div className="grid place-items-center gap-[20px] p-[20px]">
            <p>W trakcie: </p>
            <div className="flex gap-[20px] overflow-scroll">
              <Image
                className="rounded-[15px]"
                src={images[3]}
                width={340}
                height={206}
                alt="przed"
              />
              <Image
                className="rounded-[15px]"
                src={images[4]}
                width={340}
                height={206}
                alt="przed"
              />
            </div>
            <Image
              className="rounded-[15px]"
              src={images[5]}
              width={700}
              height={566}
              alt="przed"
            />
          </div>
        </section>
        <section>
          <div className="grid place-items-center gap-[20px] p-[20px]">
            <p>Po: </p>
            <div className="flex gap-[20px] overflow-scroll">
              <Image
                className="rounded-[15px]"
                src={images[6]}
                width={340}
                height={206}
                alt="przed"
              />
              <Image
                className="rounded-[15px]"
                src={images[7]}
                width={340}
                height={206}
                alt="przed"
              />
            </div>
            <Image
              className="rounded-[15px]"
              src={images[8]}
              width={700}
              height={566}
              alt="przed"
            />
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
