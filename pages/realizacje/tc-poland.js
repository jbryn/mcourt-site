import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/oovzIcUSd2lp6ykTzEcQ",
    "https://media.graphassets.com/Ea4ZtftxTza4cxq4EbAB",
    "https://media.graphassets.com/z4bMDX7QDqVtYjmgQbJy",
    "https://media.graphassets.com/bo4jAqsnRgVET2Fa1Htl",
];

export default function TcPoland() {

    const isMediumScreen = useMediaQuery({ minWidth: 1224 });
    const isLargeScreen = useMediaQuery({ minWidth: 1700 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-300px' : isLargeScreen ? '-100px' : isMediumScreen ? '-100px' : '0px';
    return (
        <>
            <Head>
                <title>TC Poland - Mysiadło</title>
                <meta
                    name="description"
                    content="Modernizacja Kortów Ceglanych w Mysiadle"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Klub TC Poland - Mysiadło"
                />
                <meta
                    property="og:description"
                    content="Modernizacja Kortów Ceglanych w Mysiadle"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/1yGpqBIEQniUmn7VwVKG"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/1yGpqBIEQniUmn7VwVKG"}
                    title="TC Poland - Mysiadło"
                    subtitle="Modernizacja Kortów Ceglanych w Mysiadle"
                    offsetY={offsetY}
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W Klubie TC Poland w Mysiadle przeprowadziliśmy retopping dwóch kortów, zamieniając starą nawierzchnię z mączki ceglanej na nowoczesną Antuka premium.
                        </h1>
                        <h2>
                            Nowa nawierzchnia zapewnia nie tylko doskonałą <strong>wodoprzepuszczalność</strong>, ale także zwiększony komfort gry, co czyni ją idealnym wyborem dla intensywnie eksploatowanych kortów. Modernizacja kortów w Klubie TC Poland to kolejny krok w podnoszeniu standardów sportowych w Mysiadle, zapewniając graczom najwyższą <strong>jakość i komfort</strong> podczas każdej rozgrywki.
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
