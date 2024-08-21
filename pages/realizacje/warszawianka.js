import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/dVIxPAIBTyq6zZOp4oMC",
    "https://media.graphassets.com/WthtxoFQTUyBt4CAdkvC",
    "https://media.graphassets.com/f8iJSVf1RyOQCll4fQgg",
    "https://media.graphassets.com/yBuyUVzShxY5eFv38iuA",
    "https://media.graphassets.com/Bze0f6OFQoEMeytcoVj0",
    "https://media.graphassets.com/ASK0QzNsTyuex2DFYH7u",
    "https://media.graphassets.com/lNZWmEjTSKtn8aWbMvbb",
    "https://media.graphassets.com/JYg9PktKRKeGwnD1ZULE",
    "https://media.graphassets.com/Vu6GJCrfR6dj0ZqKtIXL",
    "https://media.graphassets.com/aWuJ0VeVQ3e06Qko8mpx",
    "https://media.graphassets.com/OCxwN3qRUcNRm3TUs8g5",
    "https://media.graphassets.com/9JksuyFS6iY9jkw8skiF",
];

export default function Warszawianoa() {

    const isMediumScreen = useMediaQuery({ minWidth: 1224 });
    const isLargeScreen = useMediaQuery({ minWidth: 1700 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '0px' : isLargeScreen ? '-100px' : isMediumScreen ? '-100px' : '0px';
    return (
        <>
            <Head>
                <title>Kort akrylowy - Warszawianka</title>
                <meta
                    name="description"
                    content="Modernizacja Kortów na Warszawiance – Nowa Nawierzchnia Laykold"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort akrylowy - Warszawianka"
                />
                <meta
                    property="og:description"
                    content="Modernizacja Kortów na Warszawiance – Nowa Nawierzchnia Laykold"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/XQJQls51RHCkcPOUepB3"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/XQJQls51RHCkcPOUepB3"}
                    title="Kort akrylowy - Warszawianka"
                    subtitle="Modernizacja Kortów na Warszawiance – Nowa Nawierzchnia Laykold"
                    offsetY={offsetY}
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W 2022 roku przeprowadziliśmy kompleksowy <strong>retopping</strong> oraz <strong>odświeżenie nawierzchni</strong> czterech kortów tenisowych na Warszawiance. Stara, wysłużona nawierzchnia Decoturf została zastąpiona nowoczesną nawierzchnią <strong>Laykold</strong>, znaną m.in. z kortów <strong>US Open</strong>.
                        </h1>
                        <h2>
                            Dzięki temu korty na <strong>Warszawiance</strong> zyskały nową jakość, oferując graczom komfort i <strong>doskonałe warunki do gry</strong>, porównywalne z tymi na największych turniejach na świecie. Jesteśmy dumni z realizacji tego projektu, który przyczynił się do podniesienia standardu obiektu sportowego. Zapraszamy do testowania nawierzchni!
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
                    <Link href='/realizacje' className="flex items-center gap-5 text-light-grey text-[18px]">
                        <div className="rotate-180 scale-[200%]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none"><path d="M11.354 4.354a.5.5 0 0 0 0-.708L8.172.464a.5.5 0 1 0-.708.708L10.293 4 7.464 6.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h11v-1H0v1Z" fill="#7ED957" /></svg>
                        </div>
                        Powrót
                    </Link>
                </section>

                <Contact
                    imageUrl={"https://media.graphassets.com/fDKZW0brSNSOAvU4u0tv"}
                />
            </main>
        </>
    );
}
