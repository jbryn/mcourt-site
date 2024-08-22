import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/gdoDi7JRyyitGv0aUltC",
    "https://media.graphassets.com/Ce2qqwDJQVKas3nNfSRU",
    "https://media.graphassets.com/XhMFwl9fQb6zCXsADLTm",
    "https://media.graphassets.com/GA59nnhS6GkWO09ENGjH",
    "https://media.graphassets.com/GA59nnhS6GkWO09ENGjH",
    "https://media.graphassets.com/udZBO1KeRpCgWmArZbcA",
    "https://media.graphassets.com/ojqZXg90TkEfi3zo51VW",
    "https://media.graphassets.com/jtRjEU6jRtCVJCBsEmUy",
];

export default function Garwolin() {

    const isMediumScreen = useMediaQuery({ minWidth: 1224 });
    const isLargeScreen = useMediaQuery({ minWidth: 1700 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-300px' : isLargeScreen ? '-100px' : isMediumScreen ? '-100px' : '0px';
    return (
        <>
            <Head>
                <title>Garwolińska Akademia Tenisowa - Garwolin</title>
                <meta
                    name="description"
                    content="Antuka Premium na Kortach Garwolińskiej Akademii Tenisa"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Garwolińska Akademia Tenisowa - Garwolin"
                />
                <meta
                    property="og:description"
                    content="Antuka Premium na Kortach Garwolińskiej Akademii Tenisa"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/sBnFomB8SS6P9aB4D74A"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/sBnFomB8SS6P9aB4D74A"}
                    title="Garwolińska Akademia Tenisowa - Garwolin"
                    subtitle="Antuka Premium na Kortach Garwolińskiej Akademii Tenisa"
                    offsetY={offsetY}
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W Garwolińskiej Akademii Tenisa zrealizowaliśmy projekt modernizacji dwóch kortów, wyposażając je w nowoczesną nawierzchnię Antuka premium.
                        </h1>
                        <h2>
                            Dzięki tej inwestycji korty zyskały na <strong>jakości</strong>, zapewniając graczom doskonałe warunki do treningu i rozgrywek. <strong>Antuka premium</strong> wyróżnia się wyjątkową <strong>wodoprzepuszczalnością</strong> oraz komfortem gry, co sprawia, że jest idealnym wyborem zarówno dla zawodowców, jak i amatorów. Cieszymy się, że mogliśmy przyczynić się do podniesienia standardów w Garwolińskiej Akademii Tenisa.
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
