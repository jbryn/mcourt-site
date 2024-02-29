import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

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
                    content="https://media.graphassets.com/AdBoETmRQu2S6x4pgNSA"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/AdBoETmRQu2S6x4pgNSA"}
                    title="OSiR Wawer - Warszawa"
                    subtitle="Nowe życie dla kortów tenisowych w Warszawie na Wawrze: Profesjonalna nawierzchnia Antuka i nowoczesne udogodnienia"
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
                            W 2022 roku zakończyliśmy remont <strong>kortów tenisowych przy ul. Lokalnej 33 w Warszawie</strong>, nadając im zupełnie nowy wymiar. Nasze prace obejmowały wymianę nawierzchni na <strong>profesjonalną Antuka</strong>, co gwarantuje nie tylko <strong>trwałość</strong>, ale także doskonałe warunki do gry.
                        </h1>
                        <h2>
                            Dodatkowo, zainstalowaliśmy <strong>nowe ogrodzenie i oświetlenie</strong>, które zapewnią bezpieczeństwo i komfort nawet podczas nocnych rozgrywek. Jako udogodnienie dla zarządcy obiektu, zaprojektowaliśmy także nowy system <strong>automatycznego nawodnienia</strong>, który pozwoli utrzymać korty w najlepszym stanie przez cały sezon.
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
