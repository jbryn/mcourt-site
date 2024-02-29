import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";


import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/PXH09ymFRt6Ob53sYWrN",
    "https://media.graphassets.com/zFzzv5q9Qze6LRDJg5Py",
    "https://media.graphassets.com/K65MoJzjSA6WHgBILFTh",
    "https://media.graphassets.com/1jNJtgwaTilxZl56VkFw",
    "https://media.graphassets.com/TeFdChtMS1mzW1z1AqDB",
    "https://media.graphassets.com/oev0x6rR3ucTiVVoXC8G",
    "https://media.graphassets.com/rjhTDdNESq1zj4DPTHkw",
    "https://media.graphassets.com/fZ1uIm0DQp6to0DcFTRw",
    "https://media.graphassets.com/tPRlgkfjQ72rEPWxaY5n",
];

const reversedImages = images.reverse();

export default function HalaGnieznoPage() {

    const isMediumScreen = useMediaQuery({ minWidth: 1124 });
    const isLargeScreen = useMediaQuery({ minWidth: 1600 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-50px' : isLargeScreen ? '0px' : isMediumScreen ? '0px' : '0px';

    return (
        <>
            <Head>
                <title>Hala tenisowa - Gniezno</title>
                <meta
                    name="description"
                    content="Nowoczesne oświetlenie i renowacja nawierzchni - odmieniamy halę tenisową w Gnieźnie."
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Hala tenisowa - Gniezno"
                />
                <meta
                    property="og:description"
                    content="Nowoczesne oświetlenie i renowacja nawierzchni - odmieniamy halę tenisową w Gnieźnie."
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/5zdtLaRRAiYinj5jzoaA"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/5zdtLaRRAiYinj5jzoaA"}
                    title="Hala tenisowa - Gniezno"
                    offsetY={offsetY}
                    subtitle="Nowoczesne oświetlenie i renowacja nawierzchni - odmieniamy halę tenisową w Gnieźnie."
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
                            W 2020 roku przeprowadziliśmy kompleksowy r<strong>emont hali tenisowej</strong> w Gnieźnie, podnosząc
                            jej standardy i <strong>komfort użytkowania</strong>. Nasze prace objęły wymianę powłok, nagrzewnic oraz
                            oświetlenia, co przyczyniło się do poprawy warunków gry oraz zapewniło lepsze <strong>oświetlenie</strong>
                            nawet podczas wieczornych meczów.
                        </h1>
                        <h2>
                            Ponadto, przeprowadziliśmy <strong>
                                renowację nawierzchni
                                ceglanej
                            </strong>, co dodatkowo podniosło jakość i estetykę obiektu. Dzięki temu remontowi, hala
                            tenisowa stała się bardziej atrakcyjnym miejscem dla wszystkich tenisistów.
                        </h2>
                        <h2>
                            Oferujemy kompleksowe <strong>usługi modernizacyjne</strong>, obejmujące wymianę powłok, nagrzewnic,
                            oświetlenia oraz renowację nawierzchni ceglanej. Popraw swoje doświadczenie gry i <strong>
                                komfort
                                podczas treningów
                            </strong> i meczów.
                        </h2>
                    </div>
                </section>
                <section className="grid place-items-center gap-[60px]">
                    <div className="grid grid-cols-1 min-[1100px]:grid-cols-2 justify-center justify-items-center gap-[10px] px-[20px]">
                        {reversedImages.map((image, index) => (
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
                </section>

                <Contact
                    imageUrl={"https://media.graphassets.com/fDKZW0brSNSOAvU4u0tv"}
                />
            </main>
        </>
    );
}
