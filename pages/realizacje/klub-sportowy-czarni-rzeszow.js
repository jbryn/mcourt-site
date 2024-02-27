import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Article from "@/components/article/article";

const images = [
    "https://media.graphassets.com/iRtrbuQlQ7KelOzSkvJU",
    "https://media.graphassets.com/Ie42MWJxQFyr10VHKjzq",
    "https://media.graphassets.com/i7d1LQ7Qxys3sPUkJriF",
    "https://media.graphassets.com/tCtdxjuEQ6rANHzwnjmJ",
    "https://media.graphassets.com/vR5LWti4TKy3NOZcjrsk",
    "https://media.graphassets.com/IOCoka6tQSNaeNoIYdse",
    "https://media.graphassets.com/RF8SfvhSAW1Hu4Z61OGO",
    "https://media.graphassets.com/YbSylqnTK61GQAwR2QgA",
    "https://media.graphassets.com/dIcSZ6XTQES6nIVlFXVs",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Klub Sportowy Czarni - Rzeszów</title>
                <meta
                    name="description"
                    content="Klub Sportowy Czarni - Rzeszów"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Klub Sportowy Czarni - Rzeszów"
                />
                <meta
                    property="og:description"
                    content="Klub Sportowy Czarni - Rzeszów"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/DtM9zRUuTHaZVFa2vwAk"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/DtM9zRUuTHaZVFa2vwAk"}
                    title="Klub Sportowy Czarni - Rzeszów"
                    subtitle="Klub Sportowy Czarni - Rzeszów"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Klub Sportowy Czarni - Rzeszów
                        </h1>
                        <h2>

                        </h2>
                        <h2>

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
