import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/6efHwN3fRpyvuEaYzGLD",
    "https://media.graphassets.com/bfC3WwLrTvOm70cPi0c1",
    "https://media.graphassets.com/WuTAP9mSgSofHEHmTuUA",
    "https://media.graphassets.com/5W5cgQPZSb2S26eJi6wU",
    "https://media.graphassets.com/nbyTcZt5QVgDDW9G3Dng",
    "https://media.graphassets.com/zhzfDnqAShSBCdTALuY1",
    "https://media.graphassets.com/RaOnHXUrSkmvBnTXUeis",
    "https://media.graphassets.com/rl8UOyRJQJmFO7UXp1Bj"
];

export default function PrywatnyPodkarpackie() {

    const isMediumScreen = useMediaQuery({ minWidth: 1224 });
    const isLargeScreen = useMediaQuery({ minWidth: 1700 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-600px' : isLargeScreen ? '-300px' : isMediumScreen ? '-200px' : '0px';
    return (
        <>
            <Head>
                <title>Kort prywatny - woj. Podkarpackie</title>
                <meta
                    name="description"
                    content="Kort Tenisowy z Sztucznej Trawy Juta Fast Track 15 w Bieszczadach"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort prywatny - woj. Podkarpackie"
                />
                <meta
                    property="og:description"
                    content="Kort Tenisowy z Sztucznej Trawy Juta Fast Track 15 w Bieszczadach"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/VsHvi9iToaLaouaQvbsC"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/VsHvi9iToaLaouaQvbsC"}
                    title="Kort prywatny - woj. Podkarpackie"
                    subtitle="Kort Tenisowy z Sztucznej Trawy Juta Fast Track 15 w Bieszczadach"
                    offsetY={offsetY}
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W malowniczych Bieszczadach zrealizowaliśmy budowę prywatnego kortu tenisowego, wykorzystując sztuczną trawę Juta Fast Track 15.
                        </h1>
                        <h2>
                            Ta <strong>wysokiej jakości</strong> nawierzchnia, znana ze swojej <strong>trwałości</strong> i doskonałych właściwości użytkowych, zapewnia komfort i bezpieczeństwo podczas gry. Kort, otoczony pięknem bieszczadzkiej przyrody, stał się wyjątkowym miejscem do uprawiania tenisa, łącząc nowoczesną technologię z naturalnym krajobrazem. Juta <strong>Fast Track 15</strong> to idealny wybór dla tych, którzy cenią sobie najwyższe standardy oraz estetykę swojego kortu.
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
