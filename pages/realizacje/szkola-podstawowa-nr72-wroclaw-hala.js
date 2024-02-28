import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";

import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/Fg3A8V7aSmKMBG3Hw6zh",
    "https://media.graphassets.com/x6AYkwkzQryrxT7pRUcd",
    "https://media.graphassets.com/bWiBRQVbRVO1AOlj9MG2",
    "https://media.graphassets.com/ieRaYuLhQvWUAwOFdQ2C",
    "https://media.graphassets.com/zrXivawyS26DlHMxsf8n",
    "https://media.graphassets.com/mVUjeobqQHYTDHiMi1wf",
    "https://media.graphassets.com/uIC1ntLBTyeOwxpE7Aky",
    "https://media.graphassets.com/Tk1RSeGSnia5RCrlhyVe",
    "https://media.graphassets.com/G7FX1KkcRW21n6OgFuhh",
    "https://media.graphassets.com/XLFNOGXRSpefuGzjooq9",
];

export default function PrywatnyWarmiaPage() {

    const isMediumScreen = useMediaQuery({ minWidth: 1224 });
    const isLargeScreen = useMediaQuery({ minWidth: 1700 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-650px' : isLargeScreen ? '-580px' : isMediumScreen ? '-270px' : '0px';

    return (
        <>
            <Head>
                <title>Hala tenisowa - Wrocław</title>
                <meta
                    name="description"
                    content="Nawierzchnia Laykold Master Color zapewnia idealne warunki dla graczy tenisowych."
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Hala tenisowa - Wrocław"
                />
                <meta
                    property="og:description"
                    content="Nawierzchnia Laykold Master Color zapewnia idealne warunki dla graczy tenisowych."
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/mTGgax3RxCRBbP6NdkOw"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/mTGgax3RxCRBbP6NdkOw"}
                    title="Hala tenisowa - Wrocław"
                    offsetY={offsetY}
                    subtitle="Nawierzchnia Laykold Master Color zapewnia idealne warunki dla graczy tenisowych."
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Z dumą prezentujemy naszą inwestycję w sercu Wrocławia - nowoczesną halę sportową z najwyższej jakości nawierzchnią Laykold Master Color. Po wykonaniu dwóch kortów na zewnątrz, powróciliśmy, aby zapewnić uczniom Szkoły Podstawowej nr 72 wyjątkowe warunki do uprawiania sportu przez cały rok. Nawierzchnia Laykold Master Color, dzięki swojej trwałości i estetyce, zapewnia nie tylko doskonałą wydajność, ale także inspirujące otoczenie do aktywności fizycznej.
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
