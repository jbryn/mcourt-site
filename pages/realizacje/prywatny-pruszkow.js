import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

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
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W Pruszkowie powstały nowe <strong>korty tenisowe z mączki ceglanej</strong>! Dzięki naszej pracy teren zyskał <strong>profesjonalne</strong> obiekty, które zachwycą miłośników tenisa. Odkryj idealne warunki do gry i rekreacji, które oferują korty w Pruszkowie.
                        </h1>
                        <h2>
                            <strong>Profesjonalna budowa</strong> zapewnia doskonałą <strong>jakość i trwałość</strong> nawierzchni. Zarezerwuj swój termin budowy kortu już teraz!
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
