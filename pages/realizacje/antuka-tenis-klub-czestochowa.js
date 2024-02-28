import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";

import { useMediaQuery } from 'react-responsive';


const images = [
    "https://media.graphassets.com/AVPRJ6LGSaSCoEqoRRDP",
    "https://media.graphassets.com/nrwUCSPZQ56JfW3kFkbk",
    "https://media.graphassets.com/WdIIt3lGSCCE8hwAWkXX",
    "https://media.graphassets.com/8phtD2dHTUah6WV3aQuD",

    "https://media.graphassets.com/XorxidgcSziOASVwgmFi",
    "https://media.graphassets.com/3sGepOEkR3yyqZ7Qsl05",
    "https://media.graphassets.com/T474CYtOT3768To6gJaC",
    "https://media.graphassets.com/pzIhZC8mTdWf9knEWLAA",

    "https://media.graphassets.com/vyWsAOERP6TQpwRWt6U4",
    "https://media.graphassets.com/AewDtD38SZiE2kmFOz1X",
    "https://media.graphassets.com/uwH4RVrHQ5GHc3jJUVHj",
    "https://media.graphassets.com/96bo8Vo4TXiHZKxe6qTA",

    "https://media.graphassets.com/Z1s3Ie1KQOLldw51bybz",
    "https://media.graphassets.com/l4VTDYASX6j1blABsmUS",
    "https://media.graphassets.com/vIPjoSNzTPedqxr7NUae",
    "https://media.graphassets.com/EULt8dtYTOWcOlpPBign",

    "https://media.graphassets.com/tXAPpthRv2uqcN1qFJGA",
];

export default function AntukaTenisClubPage() {

    const isMediumScreen = useMediaQuery({ minWidth: 1124 });
    const isLargeScreen = useMediaQuery({ minWidth: 1600 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-450px' : isLargeScreen ? '-480px' : isMediumScreen ? '-170px' : '0px';

    return (
        <>
            <Head>
                <title>Antuka Tenis Klub - Częstochowa</title>
                <meta
                    name="description"
                    content="Wymiana podbudowy, nowa nawierzchnia, wyposażenie i ogrodzenie - kluczowe elementy modernizacji kortów tenisowych w Częstochowie"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Antuka Tenis Klub - Częstochowa"
                />
                <meta
                    property="og:description"
                    content="Wymiana podbudowy, nowa nawierzchnia, wyposażenie i ogrodzenie - kluczowe elementy modernizacji kortów tenisowych w Częstochowie"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/CeGywygMQFG5aAZWjSA9"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/CeGywygMQFG5aAZWjSA9"}
                    title="Antuka Tenis Klub - Częstochowa"
                    offsetY={offsetY}
                    subtitle="Wymiana podbudowy, nowa nawierzchnia, wyposażenie i ogrodzenie - kluczowe elementy modernizacji kortów tenisowych w Częstochowie"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W roku 2023 mieliśmy przyjemność wykonać modernizację 5-ciu kortów tenisowych w Częstochowie przy ul. Pużaka, która przyniosła nowe życie temu miejscu.
                        </h1>
                        <h2>
                            Generalny remont zakładał kompleksową przebudowę infrastruktury kortów. Najważniejszymi elementami modernizacji była wymiana podbudowy, wykonanie murów oporowych na skarpach oraz ułożenie nowej nawierzchni ceglanej Antuka, zapewniającej optymalne warunki gry i komfort dla zawodników.
                        </h2>
                        <h2>
                            Dzięki starannemu wykonaniu i wysokiej jakości nawierzchni Antuka, korty tenisowe przy ul. Pużaka stały się nowoczesnym i funkcjonalnym obiektem, gotowym sprostać wymaganiom nawet najbardziej wymagających zawodników.
                        </h2>
                        <h2>
                            Remont ten to kolejny krok w kierunku poprawy infrastruktury sportowej w Częstochowie, który przyczynia się do rozwoju i promocji tenisa w mieście oraz zachęca nowych graczy do aktywności fizycznej na świeżym powietrzu.
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
