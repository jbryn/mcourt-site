import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";


import { useMediaQuery } from 'react-responsive';


const images = [
    "https://media.graphassets.com/R34CBlCnSEiTCRHv3Tr5",
    "https://media.graphassets.com/4DGL69FATxGAc9Z0PJZU",
    "https://media.graphassets.com/KxqchgJ3TnKUdhTC4P8f",
    "https://media.graphassets.com/t1CFjP7xQGWIgSCNVqDY",
    "https://media.graphassets.com/cVboTgzIT8GmR1AEeTQA",
    "https://media.graphassets.com/EpPjB2rWRiiN5iEEkz9U",
    "https://media.graphassets.com/nyElvVD5TfGOy7ywWLjF",
    "https://media.graphassets.com/zIQb2jfLQ7OIUGecj4Al",
    "https://media.graphassets.com/5Nhs5uAsQriH2HpFYsoX",
    "https://media.graphassets.com/dDbKWlXnSOmMkWKcY7mr",
    "https://media.graphassets.com/DahJ0Y7MTNaOJgjbesO8",
    "https://media.graphassets.com/MztdQs5wTeSlsGzMrcLi",
    "https://media.graphassets.com/bV2qcjPLRUanvNuiQFig",
    "https://media.graphassets.com/fDXzklVhQEqxbVmpLDAF",
    "https://media.graphassets.com/JEDvZulURburS1bxMgUL",
];

export default function PrywatnyMalopolskaPage() {

    const isMediumScreen = useMediaQuery({ minWidth: 1024 });
    const isLargeScreen = useMediaQuery({ minWidth: 1300 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1600 });
    const isXXLargeScreen = useMediaQuery({ minWidth: 1900 });

    const offsetY = isXXLargeScreen ? '-650px' : isXLargeScreen ? '-550px' : isLargeScreen ? '-380px' : isMediumScreen ? '-170px' : '0px';

    return (
        <>
            <Head>
                <title>Kort akrylowy - Małopolska</title>
                <meta
                    name="description"
                    content="Nasza firma z dumą ogłasza ukończenie budowy pierwszego w Polsce kortu tenisowego z nawierzchnią, która równa się tej z prestiżowego turnieju US Open. "
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort akrylowy - Małopolska"
                />
                <meta
                    property="og:description"
                    content="Nasza firma z dumą ogłasza ukończenie budowy pierwszego w Polsce kortu tenisowego z nawierzchnią, która równa się tej z prestiżowego turnieju US Open. "
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/QbpW5NUQumdXLvVaZasW"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/QbpW5NUQumdXLvVaZasW"}
                    title="Kort akrylowy - Małopolska"
                    offsetY={offsetY}
                    subtitle="Nasza firma z dumą ogłasza ukończenie budowy pierwszego w Polsce kortu tenisowego z nawierzchnią, która równa się tej z prestiżowego turnieju US Open. "
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Nasza firma zrealizowała tę innowacyjną inwestycję prywatną, starannie wykonując każdy etap procesu. Nasz zakres prac obejmował kompleksowe <strong>przygotowanie podbudowy</strong>, profesjonalne ułożenie płyty betonowej, montaż solidnego ogrodzenia oraz, co najważniejsze, zastosowanie najwyższej jakości nawierzchni <strong>kortu tenisowego</strong>.
                        </h1>
                        <h2>
                            Nawierzchnia <strong>Laykold Masters 5</strong>, znana z prestiżowego turnieju <strong>US Open</strong>, to gwarancja doskonałych warunków do gry. Dzięki niej możesz doświadczyć niepowtarzalnego komfortu i precyzji podczas każdego uderzenia. Jest to doskonały wybór dla wszystkich miłośników tenisa, którzy pragną doskonalić swoje umiejętności na profesjonalnym poziomie.
                        </h2>
                        <h2>
                            Oferując kompleksowe usługi, zapewniamy nie tylko <strong>wysoką jakość nawierzchni</strong>, ale także pełne wsparcie w realizacji Twoich potrzeb. Nasz zespół doświadczonych specjalistów zadbał o każdy detal, abyś mógł cieszyć się kompletnym i funkcjonalnym <strong>kortem tenisowym</strong>.
                        </h2>
                        <h2>
                            Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o oferowanych przez nas <strong>nawierzchniach tenisowych</strong>.
                        </h2>
                    </div>
                </section>
                <section className="grid place-items-center gap-[60px]">
                    <div className="grid grid-cols-1 min-[1100px]:grid-cols-2 justify-center justify-items-center gap-[10px] px-[20px]">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="h-[300px] rounded-[15px] aspect-video"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
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
