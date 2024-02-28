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
                    content="Innowacyjna termoizolacja hal tenisowych"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Klub Sportowy Czarni - Rzeszów"
                />
                <meta
                    property="og:description"
                    content="Innowacyjna termoizolacja hal tenisowych"
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
                    subtitle="Wykorzystując zaawansowane wtłaczanie granulatu pomiędzy plandeki, obiekty
sportowe zyskują doskonałą ochronę termiczną, umożliwiając grę przez cały rok.
Zwiększona wydajność energetyczna przy minimalnych kosztach eksploatacyjnych!"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W roku 2023 przeprowadziliśmy innowacyjną modernizację hal tenisowych w klubie Czarni
                            Rzeszów poprzez zastosowanie zaawansowanej metody termoizolacji. Zamiast tradycyjnych
                            metod, zdecydowaliśmy się na nowatorskie rozwiązanie polegające na wtłoczeniu wysokiej
                            jakości granulatu styropianowego pomiędzy plandeki hali.
                        </h1>
                        <h2>
                            Dzięki temu procesowi, obiekty uzyskały doskonałą ochronę termiczną, zapewniając
                            optymalne warunki do uprawiania tenisa przez cały rok. Ta nowoczesna technologia nie tylko
                            zwiększyła wydajność energetyczną obiektów, ale także przyczyniła się do redukcji kosztów
                            eksploatacyjnych, umożliwiając dalszy rozwój infrastruktury sportowej z myślą o komforcie i
                            satysfakcji naszych klientów.
                        </h2>
                        <h2>
                            Jeżeli jesteś zainteresowany termoizolacją, skontaktuj się z nami już dzisiaj!
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
