import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/bavkcyZFTfCFtfBQwqfP",
    "https://media.graphassets.com/PDPgIwYpR12uLtxm2zcF",
    "https://media.graphassets.com/LiQQz0WRNalvI8F1AEC4",
    "https://media.graphassets.com/PJ7OAhcoRK6QiuQ5K1fl",
    "https://media.graphassets.com/XXed1E9cRqOcM6B9gHLj",
    "https://media.graphassets.com/BHlmekrbRyaCmwe3iqSn",
];

export default function Grudziadz() {

    const isMediumScreen = useMediaQuery({ minWidth: 1224 });
    const isLargeScreen = useMediaQuery({ minWidth: 1700 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-300px' : isLargeScreen ? '-100px' : isMediumScreen ? '-100px' : '0px';
    return (
        <>
            <Head>
                <title>Kort prywatny - woj. Kujawsko-Pomorskie</title>
                <meta
                    name="description"
                    content="Nowoczesna Nawierzchnia Fast Track 15 na Prywatnym Korcie"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort prywatny - woj. Kujawsko-Pomorskie"
                />
                <meta
                    property="og:description"
                    content="Nowoczesna Nawierzchnia Fast Track 15 na Prywatnym Korcie"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/PfztPXkrRTOFiQnvJKEG"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/PfztPXkrRTOFiQnvJKEG"}
                    title="Kort prywatny - Grudziądz"
                    subtitle="Nowoczesna Nawierzchnia Fast Track 15 na Prywatnym Korcie"
                    offsetY={offsetY}
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Zrealizowaliśmy projekt budowy prywatnego kortu tenisowego, wyposażając go w nowoczesną nawierzchnię ze sztucznej trawy Fast Track 15.
                        </h1>
                        <h2>
                            Ta <strong>wysokiej jakości powierzchnia</strong> zapewnia doskonałe warunki do gry, łącząc trwałość z komfortem użytkowania. <strong>Fast Track 15</strong> cechuje się szybkim odprowadzaniem wody oraz optymalnym poziomem amortyzacji, co czyni ją idealnym wyborem na korty tenisowe. Dzięki tej realizacji, <strong>prywatny kort</strong> stał się miejscem, które gwarantuje pełnię satysfakcji z każdej rozgrywki.
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
