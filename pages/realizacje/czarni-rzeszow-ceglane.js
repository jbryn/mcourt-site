import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/LiP7K0gBRmmxh5554cZe",
    "https://media.graphassets.com/36KZ0XHeQGaSDIoteEjC",
    "https://media.graphassets.com/E8cfeHO6QWOQif8Fp9dM",
    "https://media.graphassets.com/XCsRE4FISfiTBfCeDw9x",
    "https://media.graphassets.com/U7jZvUUxSG1jMZ1bLPQ1",
    "https://media.graphassets.com/eM0D71L0TvWxMJf61aqR",
    "https://media.graphassets.com/defXT1EWTbK4tfyxH042",
    "https://media.graphassets.com/8FCoY3rrQHaHPPaEbyBl"
];

export default function CzarniRzeszow() {

    const isMediumScreen = useMediaQuery({ minWidth: 1224 });
    const isLargeScreen = useMediaQuery({ minWidth: 1700 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-300px' : isLargeScreen ? '-100px' : isMediumScreen ? '-100px' : '0px';
    return (
        <>
            <Head>
                <title>Korty ceglane - Klub Czarni Rzeszów</title>
                <meta
                    name="description"
                    content="Wymiana Nawierzchni Ceglanych w Klubie Czarni Rzeszów"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Korty ceglane - Klub Czarni Rzeszów"
                />
                <meta
                    property="og:description"
                    content="Wymiana Nawierzchni Ceglanych w Klubie Czarni Rzeszów"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/8AeawKfwQdyWAR7Pv902"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/8AeawKfwQdyWAR7Pv902"}
                    title="Klub Sportowy Czarni Rzeszów"
                    subtitle="Nowa Antuka Premium na Kortach Klubu Czarni Rzeszów"
                    offsetY={offsetY}
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W zasłużonym klubie tenisowym Czarni Rzeszów przeprowadziliśmy modernizację dwóch kortów ceglanych.
                        </h1>
                        <h2>
                            Stara mączka została wymieniona na nową, wysokiej jakości nawierzchnię <strong>Antuka premium</strong>, która charakteryzuje się doskonałą <strong>wodoprzepuszczalnością</strong> oraz wyjątkowym komfortem gry. Dzięki tej zmianie korty w Klubie Czarni Rzeszów zyskały nową funkcjonalność, umożliwiając graczom czerpanie pełnej przyjemności z gry nawet w trudniejszych warunkach pogodowych. To kolejny krok w podnoszeniu standardu infrastruktury tego historycznego klubu.
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
