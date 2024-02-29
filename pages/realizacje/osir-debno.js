import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";


import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/TsGs9OvxSOi3yE0JC5Tw",
    "https://media.graphassets.com/ttwdKa4Tcut2OEGWYqtg",
    "https://media.graphassets.com/X78IhBBlROWF3av1nL1v",
    "https://media.graphassets.com/LbYDVGGuT4W5DHSdad8x",
    "https://media.graphassets.com/MScYzuAfSQCeweogiHNd",

    "https://media.graphassets.com/8RKpw1nQeiIKi9YyCLvb",
    "https://media.graphassets.com/3l1Uv1sXSs2RJc3eQmii",
    "https://media.graphassets.com/xvHth1LTMqAbko1Ww1Tg",
    "https://media.graphassets.com/jYKayYR56BL7w6Y0sqKA",
];

export default function OsirDebnoPage() {

    const isMediumScreen = useMediaQuery({ minWidth: 1124 });
    const isLargeScreen = useMediaQuery({ minWidth: 1600 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-450px' : isLargeScreen ? '-480px' : isMediumScreen ? '-170px' : '0px';

    return (
        <>
            <Head>
                <title>Realizacje | OSiR Dębno</title>
                <meta
                    name="description"
                    content="Korty w Dębnie otrzymują nową sztuczną trawę"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Realizacje | OSiR Dębno"
                />
                <meta
                    property="og:description"
                    content="Korty w Dębnie otrzymują nową sztuczną trawę"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/87A71ICSdizs9OXV32Tg"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/87A71ICSdizs9OXV32Tg"}
                    title="OSiR Dębno"
                    offsetY={offsetY}
                    subtitle="Korty w Dębnie otrzymują nową sztuczną trawę"
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">
                        <Link href='/realizacje' className="flex items-center gap-5 text-light-grey text-[18px]">
                            <div className="rotate-180 scale-[200%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none"><path d="M11.354 4.354a.5.5 0 0 0 0-.708L8.172.464a.5.5 0 1 0-.708.708L10.293 4 7.464 6.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h11v-1H0v1Z" fill="#7ED957" /></svg>
                            </div>
                            Powrót
                        </Link>
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W roku 2023 <strong>korty tenisowe</strong> w <strong>Dębnie</strong> przeszły znaczącą metamorfozę, która obiecuje jeszcze lepsze warunki dla tenisistów. Przeprowadziliśmy tam <strong>wymianę nawierzchni na nową</strong>, <strong>sztuczną trawę</strong>, w celu zapewnienia jeszcze wyższego komfortu gry i trwałości kortów.
                        </h1>
                        <h2>
                            Nowa <strong>sztuczna trawa</strong> to innowacyjna alternatywa dla tradycyjnych nawierzchni, oferująca wiele korzyści. Jest bardziej wytrzymała, odporna na warunki atmosferyczne oraz zapewnia doskonałą przyczepność i równomierny odbiór piłki. Dzięki temu gracze mogą cieszyć się płynną i dynamiczną grą przez wiele lat.
                        </h2>
                        <h2>
                            Wraz z nową <strong>sztuczną trawą</strong> na kortach tenisowych, Dębno w woj. Zachodniopomorskim staje się jeszcze atrakcyjniejszym miejscem dla miłośników tenisa, którzy mogą cieszyć się wysokim standardem tego obiektu sportowego.
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
