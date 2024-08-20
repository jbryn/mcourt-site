import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";


import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/7ODCftrT8mdSjNx5zNNg",
    "https://media.graphassets.com/omuMxHx9RKKESnbg2z8G",
    "https://media.graphassets.com/eXrbTbg2RCCEmwykVhdd",
    "https://media.graphassets.com/5f9nzSWSlySD1b8dg8dh",
    "https://media.graphassets.com/TEHrYFQRCWiGXGxwpINh",
    "https://media.graphassets.com/oqUdarJDTa66TMrFTxAu",
    "https://media.graphassets.com/88ijNGvSQqalnQxtawTc",
    "https://media.graphassets.com/n0LvvagMSCe1HYpR3ego",
    "https://media.graphassets.com/0mpF31GjTNKbAc9ZSlgn",
    "https://media.graphassets.com/CAaFn2rOSVGb951yIr31",
];

export default function Opole() {

    const isMediumScreen = useMediaQuery({ minWidth: 1424 });
    const isLargeScreen = useMediaQuery({ minWidth: 1700 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-400px' : isLargeScreen ? '-400px' : isMediumScreen ? '-270px' : '0px';

    return (
        <>
            <Head>
                <title>Nawierzchnie tenisowe Opole</title>
                <meta
                    name="description"
                    content="Profesjonalna wymiana nawierzchni kortów"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Nawierzchnie tenisowe Opole"
                />
                <meta
                    property="og:description"
                    content="Profesjonalna wymiana nawierzchni kortów"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/cm02cqlbq9r6a07un6isun29v"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/4g14dmRHSjSX00IE1JOT"}
                    title="Nawierzchnie tenisowe Opole"
                    offsetY={offsetY}
                    subtitle="W 2024 roku nasza firma z sukcesem przeprowadziła wymianę nawierzchni na trzech kortach tenisowych, zastępując tradycyjną mączkę ceglaną nowoczesną nawierzchnią akrylową Laykold Masters 5. To rozwiązanie nie tylko podnosi estetykę kortów, ale także znacząco poprawia jakość gry, zapewniając doskonałe właściwości odbicia piłki oraz komfort zawodników."
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Kolorystyka wybrana do tej realizacji to elegancka kombinacja <strong>Dark Blue</strong> na powierzchni kortu oraz <strong>Light Blue</strong> na wybiegach, co nie tylko podkreśla nowoczesny charakter obiektów, ale również zapewnia optymalny kontrast dla piłki, ułatwiając grę.
                        </h1>
                        <h2>
                            <strong>Nawierzchnia Laykold Masters 5</strong> to jeden z najlepszych <strong>systemów akrylowych</strong> dostępnych na rynku, ceniony przez profesjonalnych tenisistów na całym świecie. Dzięki naszej pracy, korty zyskały nowe życie i są gotowe na intensywną eksploatację przez wiele sezonów.
                        </h2>
                        <h2>Zapraszamy do kontaktu, jeśli są Państwo zainteresowani <strong>modernizacją swoich obiektów sportowych</strong>. Z przyjemnością doradzimy i zaproponujemy najlepsze rozwiązania dla Państwa potrzeb.</h2>
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
