import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";

import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/MMV2zmVGQhG0KGlgT3E8",
    "https://media.graphassets.com/brtBI2zQuJc4VbdoIADQ",
    "https://media.graphassets.com/NgfZZZAuRHCWOg3bncsW",
    "https://media.graphassets.com/PYm6PBUZSFWa1tB9myA4",
    "https://media.graphassets.com/YFt1SwSLOaPixfopWcMQ",
    "https://media.graphassets.com/mJBAzeuwRCmOyQkFFMQ2",
    "https://media.graphassets.com/I5EQ8FT3KpInjUo1KxhA",
    "https://media.graphassets.com/dtdQWuqRC2BGZm6ezt4g",
];

export default function PrywatnyWarmiaPage() {

    const isMediumScreen = useMediaQuery({ minWidth: 1300 });
    const isLargeScreen = useMediaQuery({ minWidth: 1600 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-550px' : isLargeScreen ? '-480px' : isMediumScreen ? '-350px' : '0px';

    return (
        <>
            <Head>
                <title>Kort ze sztucznej trawy - Mazowsze</title>
                <meta
                    name="description"
                    content="Prywatny kort tenisowy ze sztuczną nawierzchnią"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort ze sztucznej trawy - Mazowsze"
                />
                <meta
                    property="og:description"
                    content="Prywatny kort tenisowy ze sztuczną nawierzchnią"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/HBJvx3IFT22tvWmrZts1"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/HBJvx3IFT22tvWmrZts1"}
                    title="Kort ze sztucznej trawy - Mazowsze"
                    offsetY={offsetY}
                    subtitle="Prywatny kort tenisowy ze sztuczną nawierzchnią"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Prywatny kort tenisowy koło Warszawy, zastosowano sztuczną trawę Juta Fast Track 15, pole kortu w kolorze ceglanym natomiast wybiegi wykonano w kolorze oliwkowa zieleń.
                        </h1>
                        <h2>
                            Budujemy nowoczesną nawierzchnię z sztucznej trawy na prywatnych posesjach koło Warszawy. Wyjątkowa jakość dla prawdziwych miłośników tenisa
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
