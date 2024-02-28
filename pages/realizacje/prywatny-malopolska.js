import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";

import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/KwX5Uz7ZTqidnStaO6F2",
    "https://media.graphassets.com/cvfr8VrkQ2mNBqUngyJr",
    "https://media.graphassets.com/Fid7I9SQmeaUTERzMdXp",
    "https://media.graphassets.com/2CdPnrDzQuyB87Ok33vb",
    "https://media.graphassets.com/OsufRGiBRnqKYy0GfSyl",
    "https://media.graphassets.com/vDjmiYzQSoX2BDReyEWQ",
    "https://media.graphassets.com/3OUouOvoRjWX4OIRWZGM",
    "https://media.graphassets.com/QyyFdVlTsG0YaxK7SEDW",
    "https://media.graphassets.com/X2QJe47uT5qsteVQvFz2",
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
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W 2023 roku właściciele prywatnych kortów tenisowych mogą cieszyć się nową nawierzchnią sztuczną. Juta Fast Track to doskonałe rozwiązanie dla tych, którzy pragną cieszyć się wysoką jakością gry, bez względu na warunki atmosferyczne. Dzięki specjalnej konstrukcji i technologii produkcji, nawierzchnia ta zapewnia doskonałą przyczepność, równomierny odbiór piłki oraz trwałość przez wiele lat.
                        </h1>
                        <h2>
                            Wybór nawierzchni sztucznej Juta Fast Track to także kwestia estetyki i komfortu użytkowania. Dostępność różnorodnych kolorów pozwala dostosować wygląd kortu do indywidualnych preferencji, tworząc eleganckie i nowoczesne miejsce do gry.
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
