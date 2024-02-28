import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Article from "@/components/article/article";

const images = [
    "https://media.graphassets.com/pgMHOAoRhOGJZFbPVRJi",
    "https://media.graphassets.com/FUw9tF42SOmyZ9LyOuj1",
    "https://media.graphassets.com/wL4Hg1soRHuCySwEKF2R",
    "https://media.graphassets.com/VAVp5Pn9QG6BOmO1K8Bw",

    "https://media.graphassets.com/xVnZAZ8fR4iz8DloR4iu",
    "https://media.graphassets.com/z7Uu1QdLQAym0QgoJBPY",
    "https://media.graphassets.com/7wDTzMnRYyOxC8nyrkbQ",
    "https://media.graphassets.com/j47BPNlqQq6PQRW24baQ",

    "https://media.graphassets.com/YYQdjq49SSqfqP1ofehY",
    "https://media.graphassets.com/oIbMywPzRWCSIPgpqGmI",
    "https://media.graphassets.com/yvYV3rVVSQ2tQFtDY0yi",
    "https://media.graphassets.com/rJ3c3KMpQnGEjx4Vl9W6",

    "https://media.graphassets.com/iOejWaVbRtKGbJE2ZnWP",
    "https://media.graphassets.com/dx8FlE2oTkiT6wA9v0gM",
    "https://media.graphassets.com/DMEbjrzCTDaqf1PtViDs",
    "https://media.graphassets.com/qIWG6JRIRTONEuLfu1Gu",

    "https://media.graphassets.com/FQA9xEbTcGwDAW6kllJg",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Kort ze sztucznej trawy - Mazury</title>
                <meta
                    name="description"
                    content="Nowoczesny kort tenisowy na Mazurach: luksus i elegancja spotykają się w sercu natury"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort ze sztucznej trawy - Mazury"
                />
                <meta
                    property="og:description"
                    content="Nowoczesny kort tenisowy na Mazurach: luksus i elegancja spotykają się w sercu natury"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/haQeipTzTfyoYPasozX8"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/haQeipTzTfyoYPasozX8"}
                    title="Kort ze sztucznej trawy - Mazury"
                    subtitle="Nowoczesny kort tenisowy ze sztucznej trawy z zielonym piaskiem kwarcowym. Nasz kompleksowy projekt obejmował wszystko, od podbudowy po oświetlenie"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W roku 2021 na przepięknych Mazurach wybudowaliśmy nowoczesny kort tenisowy. Został on wyposażony w innowacyjną nawierzchnię ze sztucznej trawy, zasypanej zielonym piaskiem kwarcowym, co zapewnia nie tylko doskonałe warunki do gry, ale także elegancki wygląd idealnie komponujący się z naturalnym otoczeniem.
                        </h1>
                        <h2>
                            Projekt tego kortu został przemyślany w najdrobniejszych detalach. Oprócz samej nawierzchni, która gwarantuje wysoką jakość i trwałość, kompleksowo zajęliśmy się również wszystkimi innymi elementami. Od podstawowej budowy, poprzez drenaż, ogrodzenie, oświetlenie, aż po wyposażenie w drewniane słupki tenisowe, które stanowią niezwykłą replikę tych, które możemy zobaczyć na prestiżowym turnieju Wimbledon.
                        </h2>
                        <h2>
                            Naszym celem było stworzenie kortu, który nie tylko zapewni niezapomniane doświadczenia podczas gry, ale także będzie stanowił harmonijne połączenie luksusu, elegancji i natury.
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
