import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Article from "@/components/article/article";

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
                    content="https://media.graphassets.com/2gYQ1eFTXO5qniZgsTik"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/2gYQ1eFTXO5qniZgsTik"}
                    title="Centrum Kultury w Woli Gołkowskiej"
                    subtitle="Odkryj nasze profesjonalne podejście do modernizacji kortów tenisowych!"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Naszym zadaniem w 2021 roku było zastąpienie istniejącej nawierzchni kortu tenisowego nową, wykonaną ze sztucznej trawy. Dzięki naszej pracy, kort zyskał nowoczesny wygląd i lepszą jakość gry. Odkryj nasze profesjonalne podejście do modernizacji obiektów sportowych!
                        </h1>
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
