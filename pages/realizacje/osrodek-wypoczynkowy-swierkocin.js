import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

const images = [
    "https://media.graphassets.com/EzVyI7MjTaKeNJmkXaH0",
    "https://media.graphassets.com/KmdMA2n5TGRhosJq9aSq",
    "https://media.graphassets.com/4jPWMZcRa2kvPi1xPtez",
    "https://media.graphassets.com/BXVHO2GRp9JUGEBMOCmg",
    "https://media.graphassets.com/wUAYOUjsQdK8g8tpam2V",
    "https://media.graphassets.com/CfZ6n47zSPGUn1AkRj1N",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Ośrodek wypoczynkowy - Świerkocin</title>
                <meta
                    name="description"
                    content="Transformacja Kortu Tenisowego w Świerkocinie: Generalny Remont"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Ośrodek wypoczynkowy - Świerkocin"
                />
                <meta
                    property="og:description"
                    content="Transformacja Kortu Tenisowego w Świerkocinie: Generalny Remont"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/ULNthdorSK15hIpsNOMA"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/ULNthdorSK15hIpsNOMA"}
                    title="Ośrodek wypoczynkowy - Świerkocin"
                    subtitle="Transformacja Kortu Tenisowego w Świerkocinie: Generalny Remont"
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
                            W 2021 roku podjęliśmy wyzwanie generalnego <strong>remontu kortu tenisowego</strong> w
                            <strong>Ośrodku Wypoczynkowym w Świerkocinie</strong>. Zaniedbany kort, który wcześniej
                            przypominał dziki las, został zrewitalizowany i przekształcony w nowoczesny <strong>
                                plac do
                                gry
                            </strong>.
                        </h1>
                        <h2>
                            Ta transformacja nie tylko poprawiła estetykę obiektu, ale także stworzyła <strong>
                                nowy
                                wymiar rozrywki
                            </strong> dla miłośników tenisa. Teraz wykonany przez nas kort tenisowy w
                            Świerkocinie zaprasza do aktywnej gry w otoczeniu przyjaznej atmosfery i <strong>
                                pięknej
                                przyrody
                            </strong>.
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
