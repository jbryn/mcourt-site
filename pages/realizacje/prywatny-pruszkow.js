import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Article from "@/components/article/article";

const images = [
    "https://media.graphassets.com/CHrH8rt5SlyqOahEvVzD",
    "https://media.graphassets.com/HMxuYqQZS7qhVX0BoLWp",
    "https://media.graphassets.com/fSk7piwSJ6DEg1QVxYRz",
    "https://media.graphassets.com/YRKdcyj9TOGPNBvh7HfE",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Kort ceglany - Pruszków</title>
                <meta
                    name="description"
                    content="Nowe korty tenisowe z mączki ceglanej w Pruszkowie: doskonałe warunki do gry"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort ceglany - Pruszków"
                />
                <meta
                    property="og:description"
                    content="Nowe korty tenisowe z mączki ceglanej w Pruszkowie: doskonałe warunki do gry"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/K6b6golKRMeJOZaG3MjG"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/K6b6golKRMeJOZaG3MjG"}
                    title="Kort ceglany - Pruszków"
                    subtitle="Nowe korty tenisowe z mączki ceglanej w Pruszkowie: doskonałe warunki do gry"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W Pruszkowie powstały nowe korty tenisowe z mączki ceglanej! Dzięki naszej pracy teren zyskał profesjonalne obiekty, które zachwycą miłośników tenisa. Odkryj idealne warunki do gry i rekreacji, które oferują korty w Pruszkowie.
                        </h1>
                        <h2>
                            Profesjonalna budowa zapewnia doskonałą jakość i trwałość nawierzchni. Zarezerwuj swój termin budowy kortu już teraz!
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
