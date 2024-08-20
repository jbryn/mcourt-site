import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/PWI5aXoSzmQAJ5IBHYk3",
    "https://media.graphassets.com/BwyoLA3GRmKUBuUEOTVw",
    "https://media.graphassets.com/Urk8vZj3Q7ap3uQmDT85",
    "https://media.graphassets.com/3QkelcJxR5Ss90u0XE1A",
    "https://media.graphassets.com/v201mN6xSuqJyF20GrYs",
    "https://media.graphassets.com/Jn3hqVFQJ2i4h9qh1x6G",
    "https://media.graphassets.com/kK8Pkh0mROq5WYfKnGAu",
    "https://media.graphassets.com/uDxzPTwR3CnVVFMUZTp7",
];

export default function PrywatnyDolnoslaskie() {

    const isMediumScreen = useMediaQuery({ minWidth: 1424 });
    const isLargeScreen = useMediaQuery({ minWidth: 1700 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-500px' : isLargeScreen ? '-400px' : isMediumScreen ? '-270px' : '0px';
    return (
        <>
            <Head>
                <title>Kort akrylowy - woj. Dolnośląskie</title>
                <meta
                    name="description"
                    content="Specjalistyczny Remont Akrylowej Nawierzchni Kortów Tenisowych"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort akrylowy - woj. Dolnośląskie"
                />
                <meta
                    property="og:description"
                    content="Specjalistyczny Remont Akrylowej Nawierzchni Kortów Tenisowych"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/TnXmtDuRMquQyW2uzB0w"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/TnXmtDuRMquQyW2uzB0w"}
                    title="Kort akrylowy - woj. Dolnośląskie"
                    subtitle="Specjalistyczny Remont Akrylowej Nawierzchni Kortów Tenisowych"
                    offsetY={offsetY}
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Nasza firma przeprowadziła <strong>specjalistyczny remont nawierzchni kortów tenisowych</strong>, skupiając się na usunięciu starego, spękanego podkładu gumowego w polu kortowym o powierzchni około 270 m².
                        </h1>
                        <h2>
                            Po usunięciu uszkodzonej warstwy, wkleiliśmy nowy podkład, odtworzyliśmy warstwy wyrównujące oraz wykonaliśmy <strong>retopping</strong> całej powierzchni kortów. Dzięki tym pracom, korty odzyskały swoje pierwotne właściwości i są gotowe do intensywnej eksploatacji przez graczy na każdym poziomie zaawansowania.
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
