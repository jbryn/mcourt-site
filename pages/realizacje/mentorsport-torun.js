import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";


import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/3Scx6sqOTn2twRhnYvp4",
    "https://media.graphassets.com/XoDBOA06SHejG1Wi4b9S",
    "https://media.graphassets.com/KOAkek7BQvaB8lYN2DHR",
    "https://media.graphassets.com/1I6ivbxlSoSGDTg7GNwg",

    "https://media.graphassets.com/iyJenH3LRWK03Vwcfm1A",
    "https://media.graphassets.com/hmlZQIJUQ9isaqfAIG0I",
    "https://media.graphassets.com/Z8T4devxRmxsF9WmoYcs",
    "https://media.graphassets.com/mThid9unQkmAOnTbbWdC",

    "https://media.graphassets.com/omSw4f9ATauRB2182LHk",
    "https://media.graphassets.com/HCyJEx7RUaZY9OZREaTO",
    "https://media.graphassets.com/PXXogQ7mT3alVKiC1Cr9",
];

export default function MentorSportPage() {

    const isMediumScreen = useMediaQuery({ minWidth: 1124 });
    const isLargeScreen = useMediaQuery({ minWidth: 1600 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-250px' : isLargeScreen ? '-280px' : isMediumScreen ? '0px' : '0px';

    return (
        <>
            <Head>
                <title>Realizacje | MentorSport - Toruń</title>
                <meta
                    name="description"
                    content="Przełomowa Modernizacja: Toruński Klub Mentor Wprowadza Nową Nawierzchnię na Korty Tenisowe"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Realizacje | MentorSport - Toruń"
                />
                <meta
                    property="og:description"
                    content="Przełomowa Modernizacja: Toruński Klub Mentor Wprowadza Nową Nawierzchnię na Korty Tenisowe"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/KOAkek7BQvaB8lYN2DHR"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/KOAkek7BQvaB8lYN2DHR"}
                    title="MentorSport - Toruń"
                    offsetY={offsetY}
                    subtitle="W 2022 roku Toruński Klub Mentor przeszedł przełomową modernizację, zastępując dotychczasową nawierzchnię na swoich kortach nową sztuczną trawą Juta Fast Track 15."
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">
                        <Link href='/realizacje' className="flex items-center gap-5 text-light-grey text-[18px] pb-[30px]">
                            <div className="rotate-180 scale-[200%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none"><path d="M11.354 4.354a.5.5 0 0 0 0-.708L8.172.464a.5.5 0 1 0-.708.708L10.293 4 7.464 6.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h11v-1H0v1Z" fill="#7ED957" /></svg>
                            </div>
                            Powrót
                        </Link>
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W 2022 roku <strong>Toruński Klub Mentor</strong> przeszedł przełomową modernizację, wymieniając
                            dotychczasową nawierzchnię na nową. Nawierzchnia ze <strong>sztucznej trawy</strong> Juta Fast Track 15
                            nie tylko zapewnia lepsze wrażenia podczas gry, ale także wymaga mniej konserwacji, co
                            oznacza mniej czasu spędzanego na konserwacji kortów i więcej czasu na samą grę. To
                            istotne udogodnienie dla członków klubu, które podnosi jakość doświadczenia tenisowego.
                        </h1>
                        <h2>
                            Wprowadzenie nowej nawierzchni to dowód zaangażowania <strong>Toruńskiego Klubu Mentor</strong> w
                            ciągłe doskonalenie swojej oferty i zapewnienie najlepszych warunków dla swoich członków.
                            Ta inwestycja nie tylko poprawia jakość kortów, ale także podkreśla pozycję klubu jako lidera
                            w lokalnej społeczności
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
