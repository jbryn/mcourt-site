import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Article from "@/components/article/article";

const images = [
    "https://media.graphassets.com/iiqVpH4RkaOPHzNCVzNA",
    "https://media.graphassets.com/jVjiCpSaSwunfHQNUwLV",
    "https://media.graphassets.com/Foo4JRmTrizYrcIwF3yw",
    "https://media.graphassets.com/0jRUOEMSk8LuLXGX7Heg",
    "https://media.graphassets.com/T4ES4bhEQNWVgTC6DJsX",
    "https://media.graphassets.com/QnE5XrBwTyeAYHwizSlR",
    "https://media.graphassets.com/9TP1eURFSVWL8ozDFTee",
    "https://media.graphassets.com/ZWglAJuRTFCz7cNfUX9t",
    "https://media.graphassets.com/jkpnCZTteHmYyeU6cdwg",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Kort ceglany - Myślenice</title>
                <meta
                    name="description"
                    content="Nowy kort tenisowy z nawierzchnią ceglaną Antuka: Profesjonalne doznania na korcie"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort ceglany - Myślenice"
                />
                <meta
                    property="og:description"
                    content="Nowy kort tenisowy z nawierzchnią ceglaną Antuka: Profesjonalne doznania na korcie"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/gRsQr6SQy8CaJSZ0oKAV"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/gRsQr6SQy8CaJSZ0oKAV"}
                    title="Kort ceglany - Myślenice"
                    subtitle="Nowy kort tenisowy z nawierzchnią ceglaną Antuka: Profesjonalne doznania na korcie"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Kort tenisowy z najwyższej jakości nawierzchnią ceglaną Antuka w malowniczych Myślenicach. Profesjonalna budowa, trwałość i doskonałe warunki do gry
                        </h1>
                        <h2>
                            W malowniczych Myślenicach wybudowaliśmy nowy – prywatny kort tenisowy z nawierzchnią ceglaną Antuka. W ramach naszych prac, kompleksowo zadbaliśmy o każdy detal, rozpoczynając od precyzyjnego wykonania i wyprofilowania solidnej podbudowy, poprzez montaż estetycznego ogrodzenia, aż po ułożenie doskonałej nawierzchni z najwyższej jakości Antuki. Nasza nawierzchnia ceglana Antuka zapewnia nie tylko wyjątkowe doznania podczas gry, ale także trwałość i odporność na warunki atmosferyczne.
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
