import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

const images = [
    "https://media.graphassets.com/TLg7xNSR72eWXvmakIVl",
    "https://media.graphassets.com/N4M6cxdpRBauoyee2gST",
    "https://media.graphassets.com/xdp5s9NjRVSoUYOV9rZY",
    "https://media.graphassets.com/mEJxB6FaQK20BcJr10Y2",
    "https://media.graphassets.com/YmWqc657TnOphesJ6fBO",
    "https://media.graphassets.com/1QCVwUEqQyyBmluPkP1Z",
    "https://media.graphassets.com/eANm6K7AQ5WTNcYL70FS",
    "https://media.graphassets.com/tixJ7f06SBS4WIyAK4GA",
    "https://media.graphassets.com/0bAnjLATUiP2GNdIW3PX",
    "https://media.graphassets.com/kVWAMvHRVO6icneCN3IF",
    "https://media.graphassets.com/T5jJTvJyQ6ZdcRTcb2lv",
    "https://media.graphassets.com/rkHxrhXyS8qhVW94KGNu",
    "https://media.graphassets.com/463FRWOqS8WMUMu5Za4z",
    "https://media.graphassets.com/kIJcLhzfTtKH52T6lrI3",
    "https://media.graphassets.com/MQqqXqt3TRyLpKwUfYVg",
    "https://media.graphassets.com/uTclDOm8QXyY93MxEE2V",
    "https://media.graphassets.com/5WuTPJnVTsqGzjfugmBt",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Kort akrylowy - Mazowsze</title>
                <meta
                    name="description"
                    content="Nasz kompleksowy projekt obejmuje podbudowę betonową, ogrodzenie, oświetlenie oraz elegancką nawierzchnię Laykold, zapewniającą niezapomniane doznania podczas gry"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort akrylowy - Mazowsze"
                />
                <meta
                    property="og:description"
                    content="Nasz kompleksowy projekt obejmuje podbudowę betonową, ogrodzenie, oświetlenie oraz elegancką nawierzchnię Laykold, zapewniającą niezapomniane doznania podczas gry"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/x7yovZqFS6m2vH1UbWuY"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/x7yovZqFS6m2vH1UbWuY"}
                    title="Kort akrylowy - Mazowsze"
                    subtitle="Nasz kompleksowy projekt obejmuje podbudowę betonową, ogrodzenie, oświetlenie oraz elegancką nawierzchnię Laykold, zapewniającą niezapomniane doznania podczas gry"
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Rok 2023 przyniósł nam wyjątkową inwestycję - <strong>prywatny kort tenisowy</strong> z najwyższej jakości nawierzchnią <strong>Laykold Masters 5</strong>. Nasz kompleksowy projekt obejmuje nie tylko <strong>nawierzchnie</strong>, ale również <strong>podbudowę betonową</strong>, solidne ogrodzenie, <strong>oświetlenie</strong> zapewniające doskonałe warunki do gry o każdej porze dnia i nocy.
                        </h1>
                        <h2>
                            Nawierzchnia <strong>Laykold Masters 5</strong> słynie z niezawodności i trwałości, zapewniając graczom wysoki komfort podczas gry. Dzięki jej doskonałym właściwościom antypoślizgowym i elastyczności, nasz kort gwarantuje wysoką amortyzację i ochronę stawów.
                        </h2>
                        <h2>
                            Gotowi na nowe wyzwania, zapraszamy do wspólnej realizacji Waszych wymarzonych projektów tenisowych! Skontaktuj się już dzisiaj i poznaj ofertę na nawierzchnie <strong>Laykold</strong>!
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
