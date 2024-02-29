import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";


import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/3OUouOvoRjWX4OIRWZGM",
    "https://media.graphassets.com/QyyFdVlTsG0YaxK7SEDW",
    "https://media.graphassets.com/cvfr8VrkQ2mNBqUngyJr",
    "https://media.graphassets.com/X2QJe47uT5qsteVQvFz2",
    "https://media.graphassets.com/vDjmiYzQSoX2BDReyEWQ",

    "https://media.graphassets.com/KwX5Uz7ZTqidnStaO6F2",

    "https://media.graphassets.com/Fid7I9SQmeaUTERzMdXp",
    "https://media.graphassets.com/2CdPnrDzQuyB87Ok33vb",
    "https://media.graphassets.com/OsufRGiBRnqKYy0GfSyl",




];

export default function PrywatnyWarmiaPage() {

    const isMediumScreen = useMediaQuery({ minWidth: 1124 });
    const isLargeScreen = useMediaQuery({ minWidth: 1500 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-600px' : isLargeScreen ? '-500px' : isMediumScreen ? '-170px' : '0px';

    return (
        <>
            <Head>
                <title>Kort ze sztucznej trawy - Małopolska</title>
                <meta
                    name="description"
                    content="Doskonała jakość gry, trwałość i estetyka - kluczowe cechy innowacyjnej nawierzchni ze sztucznej trawy"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort ze sztucznej trawy - Małopolska"
                />
                <meta
                    property="og:description"
                    content="Doskonała jakość gry, trwałość i estetyka - kluczowe cechy innowacyjnej nawierzchni ze sztucznej trawy"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/1Vvwps9gTDaWbHp3TLpd"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/1Vvwps9gTDaWbHp3TLpd"}
                    title="Kort ze sztucznej trawy - Małopolska"
                    offsetY={offsetY}
                    subtitle="Nowa nawierzchnia na prywatnych kortach tenisowych"
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">
                        <Link href='/realizacje' className="flex items-center gap-5 text-light-grey text-[18px]">
                            <div className="rotate-180 scale-[200%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none"><path d="M11.354 4.354a.5.5 0 0 0 0-.708L8.172.464a.5.5 0 1 0-.708.708L10.293 4 7.464 6.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h11v-1H0v1Z" fill="#7ED957" /></svg>
                            </div>
                            Powrót
                        </Link>
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W 2023 roku właściciele <strong>prywatnych kortów tenisowych</strong> mogą cieszyć się nową <strong>nawierzchnią sztuczną</strong>. <strong>Juta Fast Track</strong> to doskonałe rozwiązanie dla tych, którzy pragną cieszyć się wysoką jakością gry, bez względu na warunki atmosferyczne. Dzięki specjalnej konstrukcji i technologii produkcji, nawierzchnia ta zapewnia doskonałą przyczepność, równomierny odbiór piłki oraz trwałość przez wiele lat.
                        </h1>
                        <h2>
                            Wybór nawierzchni sztucznej <strong>Juta Fast Track</strong> to także kwestia estetyki i <strong>komfortu użytkowania</strong>. Dostępność różnorodnych kolorów pozwala dostosować wygląd kortu do indywidualnych preferencji, tworząc eleganckie i nowoczesne miejsce do gry.
                        </h2>

                    </div>
                </section>
                <section className="grid place-items-center gap-[60px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center gap-[10px] px-[20px]">
                        {images.map((image, index) => (
                            <Image
                                className={`lg:h-[330px] rounded-[15px] aspect-video ${index % 2 == 0 ? "justify-self-end" : "justify-self-start"
                                    }`}
                                key={index}
                                src={image}
                                width={440}
                                height={306}
                                alt={image}
                            />
                        ))}
                    </div>

                </section>

                <Contact
                    imageUrl={"https://media.graphassets.com/fDKZW0brSNSOAvU4u0tv"}
                />
            </main>
        </>
    );
}
