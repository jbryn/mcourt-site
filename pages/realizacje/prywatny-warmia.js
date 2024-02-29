import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

const images = [
    "https://media.graphassets.com/ViXzsPDZQ229jPI4qPBm",
    "https://media.graphassets.com/SXbsehViTtansc0AMZq2",
    "https://media.graphassets.com/QzhvO5eQqqxHcC3EfIXX",
    "https://media.graphassets.com/TMQUek9eTkqW3dcPzkE5",

    "https://media.graphassets.com/2Bm7I3cLRrSqvpg6pBnq",
    "https://media.graphassets.com/q1bulyQTUG2qRJQ9VWiO",
    "https://media.graphassets.com/PjrbnpPRVKLmBirVQqMg",
    "https://media.graphassets.com/1abhrEnLQeylXDQtKsME",

    "https://media.graphassets.com/dhejaMcQBuepcBUCp9QT",
    "https://media.graphassets.com/haiaISXPRZCn9R0613y2",
    "https://media.graphassets.com/9Nrr3cBxRFqKGOPZpwlN",
    "https://media.graphassets.com/r11kimNR7iGDP8PogT9g",

    "https://media.graphassets.com/Rxbi5SEtTUSPRViLDDVP",
    "https://media.graphassets.com/v0SOrqlpSrKSFSy08tHm",
    "https://media.graphassets.com/WH1Syu8lSAy7XWAnOMzF",
    "https://media.graphassets.com/FgtEhqbGTem8XwpX1nWt",

    "https://media.graphassets.com/j9n2Hf6fRPDTIhn5Tjui",
];



export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Kort akrylowy - Warmia</title>
                <meta
                    name="description"
                    content="Marzysz o prywatnym korcie z nawierzchnią Laykold? Odezwij się do nas już dziś."
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort akrylowy - Warmia"
                />
                <meta
                    property="og:description"
                    content="Marzysz o prywatnym korcie z nawierzchnią Laykold? Odezwij się do nas już dziś."
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/IEFVsQwqTHO3niZGSIvF"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/IEFVsQwqTHO3niZGSIvF"}
                    title="Kort akrylowy - Warmia"
                    subtitle="Marzysz o prywatnym korcie z nawierzchnią Laykold? Odezwij się do nas już dziś."
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
                            W roku 2023 mieliśmy przyjemność zaprojektować i wykonać <strong>kort tenisowy</strong> na malowniczych Mazurach. Nasz <strong>kort tenisowy</strong> z najwyższej jakości nawierzchnią <strong>Laykold Masters 5</strong> to doskonałe miejsce do gry. Dzięki starannie wykonanej nawierzchni zapewniającej doskonałe właściwości antypoślizgowe i trwałość, tenis staje się prawdziwą przyjemnością w otoczeniu pięknej natury Mazur.
                        </h1>
                        <h2>
                            Oprócz wykonania nawierzchni nasza firma zajęła się przygotowaniem terenu pod budowę, wykonaniem <strong>płyty betonowej</strong>, ogrodzenia oraz <strong>wyposażenia kortu</strong>.
                        </h2>
                        <h2>
                            Nasz <strong>kort tenisowy</strong> z <strong>najwyższej jakości</strong> nawierzchnią <strong>Laykold Masters 5</strong> to doskonałe miejsce do gry. Dzięki starannie wykonanej nawierzchni zapewniającej doskonałe właściwości antypoślizgowe i trwałość, tenis staje się prawdziwą przyjemnością w otoczeniu pięknej natury Mazur.
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
