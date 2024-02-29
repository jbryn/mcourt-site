import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

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
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">
                        <Link href='/realizacje' className="flex items-center gap-5 text-light-grey text-[18px] pb-[30px]">
                            <div className="rotate-180 scale-[200%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none"><path d="M11.354 4.354a.5.5 0 0 0 0-.708L8.172.464a.5.5 0 1 0-.708.708L10.293 4 7.464 6.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h11v-1H0v1Z" fill="#7ED957" /></svg>
                            </div>
                            Powrót
                        </Link>
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W roku 2021 na przepięknych Mazurach wybudowaliśmy <strong>nowoczesny kort tenisowy</strong>. Został on wyposażony w <strong>innowacyjną nawierzchnię</strong> ze <strong>sztucznej trawy</strong>, zasypanej zielonym<strong> piaskiem kwarcowym</strong>, co zapewnia nie tylko doskonałe warunki do gry, ale także elegancki wygląd idealnie komponujący się z naturalnym otoczeniem.
                        </h1>
                        <h2>
                            Projekt tego kortu został przemyślany w najdrobniejszych detalach. Oprócz samej nawierzchni, która gwarantuje wysoką jakość i trwałość, kompleksowo zajęliśmy się również wszystkimi innymi elementami. Od podstawowej budowy, poprzez drenaż, ogrodzenie, oświetlenie, aż po wyposażenie w <strong>drewniane słupki tenisowe</strong>, które stanowią niezwykłą replikę tych, które możemy zobaczyć na prestiżowym turnieju <strong>Wimbledon</strong>.
                        </h2>
                        <h2>
                            Naszym celem było stworzenie kortu, który nie tylko zapewni niezapomniane doświadczenia podczas gry, ale także będzie stanowił harmonijne połączenie <strong>luksusu</strong>, <strong>elegancji</strong> i <strong>natury</strong>.
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
