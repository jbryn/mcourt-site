import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/dhzXqpYLQJC33ToCsteR",
    "https://media.graphassets.com/6jUq9iDMTYKgEKAKoGCR",
    "https://media.graphassets.com/x0erhEaORRqA0nJ0lwZU",
    "https://media.graphassets.com/L5MxPn5fRCjdnPNEq55A",
    "https://media.graphassets.com/Ey4tMqXQeuFrddK0kbjg",
    "https://media.graphassets.com/qt0GoO5MTF6U3K6sOf8e",
    "https://media.graphassets.com/G9J8F7gRiOAxMFTT0c8g",
    "https://media.graphassets.com/NNkFwVQ7TUmKZvrGboaw"
];

export default function PrywatnyDolnoslaskiePrzedmosc() {

    const isMediumScreen = useMediaQuery({ minWidth: 1224 });
    const isLargeScreen = useMediaQuery({ minWidth: 1700 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-600px' : isLargeScreen ? '-300px' : isMediumScreen ? '-200px' : '0px';
    return (
        <>
            <Head>
                <title>Kort akrylowy - Przedmość - woj. Dolnośląskie</title>
                <meta
                    name="description"
                    content="Prywatny Kort Laykold Masters 5 z Inspiracją US Open"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort akrylowy - Przedmość - woj. Dolnośląskie"
                />
                <meta
                    property="og:description"
                    content="Prywatny Kort Laykold Masters 5 z Inspiracją US Open"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/PkjAnUuMQkObWM1KcKcX"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/PkjAnUuMQkObWM1KcKcX"}
                    title="Kort akrylowy - Przedmość - woj. Dolnośląskie"
                    subtitle="Prywatny Kort Laykold Masters 5 z Inspiracją US Open"
                    offsetY={offsetY}
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Zrealizowaliśmy prywatny kort tenisowy z nawierzchnią Laykold Masters 5, opartą na podkładzie gumowym.
                        </h1>
                        <h2>
                            Kort wyróżnia się kolorystyką zbliżoną do tej, którą można zobaczyć na prestiżowych kortach US Open, co nadaje mu profesjonalny i elegancki wygląd. Dzięki zastosowaniu wysokiej jakości materiałów, zapewniliśmy doskonałe właściwości gry, komfort oraz trwałość nawierzchni. Ten prywatny kort tenisowy jest idealnym miejscem do treningu i rekreacji, czerpiąc inspirację z największych turniejów na świecie.
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
                    <Link href='/realizacje' className="flex items-center gap-5 text-light-grey text-[18px]">
                        <div className="rotate-180 scale-[200%]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none"><path d="M11.354 4.354a.5.5 0 0 0 0-.708L8.172.464a.5.5 0 1 0-.708.708L10.293 4 7.464 6.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h11v-1H0v1Z" fill="#7ED957" /></svg>
                        </div>
                        Powrót
                    </Link>
                </section>

                <Contact
                    imageUrl={"https://media.graphassets.com/fDKZW0brSNSOAvU4u0tv"}
                />
            </main>
        </>
    );
}
