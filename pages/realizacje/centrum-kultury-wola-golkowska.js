import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

const images = [
    "https://media.graphassets.com/sYnjVRdcRWSjIbzTrBQ3",
    "https://media.graphassets.com/x3YI3TflRol7GFDAmSAa",
    "https://media.graphassets.com/u7r1XwcTBevROc6xFHS5",
    "https://media.graphassets.com/Hwm5IyEbTLiWpm1VFq6h",
    "https://media.graphassets.com/AbIh3KRJRAOfaTzI8mfi",
    "https://media.graphassets.com/4iRJzy51QzK536uZ5aST",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Centrum Kultury - Woli Gołkowskiej</title>
                <meta
                    name="description"
                    content="Nowoczesna Rewitalizacja: Kort Tenisowy Ze Sztucznej Trawy"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Centrum Kultury w Woli Gołkowskiej"
                />
                <meta
                    property="og:description"
                    content="Nowoczesna Rewitalizacja: Kort Tenisowy Ze Sztucznej Trawy"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/oQL8Jr5LQ92NsXC4a9nL"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/oQL8Jr5LQ92NsXC4a9nL"}
                    title="Centrum Kultury w Woli Gołkowskiej"
                    subtitle="Odkryj nasze profesjonalne podejście do modernizacji kortów tenisowych!"
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">
                        <Link href='/realizacje' className="flex items-center gap-5 text-light-grey text-[18px]">
                            <div className="rotate-180 scale-[200%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none"><path d="M11.354 4.354a.5.5 0 0 0 0-.708L8.172.464a.5.5 0 1 0-.708.708L10.293 4 7.464 6.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h11v-1H0v1Z" fill="#7ED957" /></svg>
                            </div>
                            Powrót
                        </Link>
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Naszym zadaniem z roku 2021 było <strong>zrewitalizowanie</strong> istniejącego kortu tenisowego poprzez
                            zastąpienie starej nawierzchni nową, wykonaną ze <strong>sztucznej trawy</strong>.
                        </h1>
                        <h2>
                            Dzięki naszej
                            staranności i profesjonalizmowi, kort przeszedł metamorfozę, zyskując nie tylko nowoczesny
                            wygląd, lecz także poprawiając <strong>jakość gry</strong>. Nasze zaangażowanie w <strong>modernizację obiektów
                                sportowych</strong> jest widoczne w każdym szczególe, a rezultaty naszej pracy przemawiają same
                            za siebie.
                        </h2>
                        <h2>
                            Odkryj, jak nasze <strong>profesjonalne podejście</strong> może odmienić doświadczenie sportowe i
                            podnieść standardy obiektów rekreacyjnych.
                        </h2>
                    </div>
                </section>
                <section className="grid place-items-center gap-[30px]">
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
