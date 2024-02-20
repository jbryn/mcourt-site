import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Article from "@/components/article/article";

const images = [
    "https://media.graphassets.com/6TZvH9VgRTanFDqCWcS8",
    "https://media.graphassets.com/hYBY7HUvRteNH13vJwIq",
    "https://media.graphassets.com/g3adGZp8SsiwLJKI5mqI",
    "https://media.graphassets.com/g9XMKHWnT7qKbxwZk6pe",
    "https://media.graphassets.com/D1PSQu2WTgWwCdQCbSck",
    "https://media.graphassets.com/3v0alKNsRduj8T4004sD",
    "https://media.graphassets.com/7wlXCbBuROyng5FNpBcj",
    "https://media.graphassets.com/6xxuVaSGR8ebNoyV7YC9",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Realizacje | OSiR Wawer - Warszawa</title>
                <meta
                    name="description"
                    content="Nowe życie dla kortów tenisowych w Warszawie na Wawrze: Profesjonalna nawierzchnia Antuka i nowoczesne udogodnienia"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Realizacje | OSiR Wawer - Warszawa"
                />
                <meta
                    property="og:description"
                    content="Nowe życie dla kortów tenisowych w Warszawie na Wawrze: Profesjonalna nawierzchnia Antuka i nowoczesne udogodnienia"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/R8mvuD0CRc4vPLcWiYTG"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/R8mvuD0CRc4vPLcWiYTG"}
                    title="OSiR Wawer - Warszawa"
                    subtitle="Nowe życie dla kortów tenisowych w Warszawie na Wawrze: Profesjonalna nawierzchnia Antuka i nowoczesne udogodnienia"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W 2022 roku zakończyliśmy remont kortów tenisowych przy ul. Lokalnej 33 w Warszawie, nadając im zupełnie nowy wymiar. Nasze prace obejmowały wymianę nawierzchni na profesjonalną Antuka, co gwarantuje nie tylko trwałość, ale także doskonałe warunki do gry.
                        </h1>
                        <h2>
                            Dodatkowo, zainstalowaliśmy nowe ogrodzenie i oświetlenie, które zapewnią bezpieczeństwo i komfort nawet podczas nocnych rozgrywek. Jako udogodnienie dla zarządcy obiektu, zaprojektowaliśmy także nowy system automatycznego nawodnienia, który pozwoli utrzymać korty w najlepszym stanie przez cały sezon.
                        </h2>
                        <h2>
                            Zapraszamy wszystkich pasjonatów tenisa do korzystania z odnowionych kortów, gdzie czekać będą na nich wyjątkowe doświadczenia sportowe i relaks na najwyższym poziomie.
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
