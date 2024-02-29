import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";


import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/eemT9Zl1R5SjpDUKBO5v",
    "https://media.graphassets.com/nLxKifB8S22uMhSAXBcw",
    "https://media.graphassets.com/CDlFMhTsRZKiI2y2ACak",
    "https://media.graphassets.com/R1O0ZbhlQzWIMieaDrGn",

    "https://media.graphassets.com/8y1E0xqJQN2vQ3VGEiBo",
    "https://media.graphassets.com/Fp2NrYdrQnOB0eTUe8u0",
    "https://media.graphassets.com/sCHJpQrASwK7CiXAmsBN",
    "https://media.graphassets.com/gOMmsf1UTjytdL1MezGV",

    "https://media.graphassets.com/JhWPbTnmRmO6SUziqLki",
    "https://media.graphassets.com/95NdHC1RqKRy34Mq8ouw",
    "https://media.graphassets.com/N8509uaXQSYhQlGy9pbq",
    "https://media.graphassets.com/vw5OaY7YS0iTz5eWcSUg",

    "https://media.graphassets.com/IU9retotQZ2tetptQ5h2",
    "https://media.graphassets.com/UaOWydv5QnuL8rbjJnUK",
];

export default function PrywatnyWarmiaPage() {

    const isMediumScreen = useMediaQuery({ minWidth: 1224 });
    const isLargeScreen = useMediaQuery({ minWidth: 1700 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-650px' : isLargeScreen ? '-580px' : isMediumScreen ? '-270px' : '0px';

    return (
        <>
            <Head>
                <title>Korty akrylowe - Wrocław</title>
                <meta
                    name="description"
                    content="Prace nad dwoma kortami tenisowymi z nawierzchnią Laykold Master Color we Wrocławiu nabierają tempa, obiecując dostarczyć wysoką jakość gry i integrację społeczności poprzez sport."
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Korty akrylowe - Wrocław"
                />
                <meta
                    property="og:description"
                    content="Prace nad dwoma kortami tenisowymi z nawierzchnią Laykold Master Color we Wrocławiu nabierają tempa, obiecując dostarczyć wysoką jakość gry i integrację społeczności poprzez sport."
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/C2u5SekYTWq4l3iFcmDI"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/C2u5SekYTWq4l3iFcmDI"}
                    title="Korty akrylowe - Wrocław"
                    offsetY={offsetY}
                    subtitle="Prace nad dwoma kortami tenisowymi z nawierzchnią Laykold Master Color we Wrocławiu nabierają tempa, obiecując dostarczyć wysoką jakość gry i integrację społeczności poprzez sport."
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
                            W Wrocławiu przy ulicy <strong>Trwałej</strong> zakończyliśmy prace nad budową dwóch nowoczesnych <strong>kortów zewnętrznych</strong> z nawierzchnią <strong>Laykold Master Color</strong>. Ta inwestycja obiecuje dostarczyć zarówno profesjonalistom, jak i amatorom wysoką jakość gry przez cały rok dzięki trwałej i estetycznej nawierzchni.
                        </h1>
                        <h2>
                            Nowe korty tenisowe stanowią istotny krok w rozwoju infrastruktury sportowej <strong>szkoły Podstawowej nr 72</strong>, promując aktywny tryb życia i integrując społeczność poprzez wspólną pasję do sportu. Niżej zamieszczamy postępy prac.
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
