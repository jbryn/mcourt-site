import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

const images = [
    "https://media.graphassets.com/8ogPU1hgSpGICqqiDLhh",
    "https://media.graphassets.com/Ew6YQ2PuQTyh7YsWT5js",
    "https://media.graphassets.com/gCv7SDibQyatBjSgpeQK",
    "https://media.graphassets.com/rbWcCkmUSrSmoujb77eY",
    "https://media.graphassets.com/KkaZTCweSuKPF1gswTRB",
    "https://media.graphassets.com/Oms2qifRWafwmzi1vFng",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Kort ze sztucznej trawy - Mazowsze</title>
                <meta
                    name="description"
                    content="Korty Tenisowe Ze Sztucznej Trawy: Komfort i Profesjonalizm od Firmy Mcourt"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort ze sztucznej trawy - Mazowsze"
                />
                <meta
                    property="og:description"
                    content="Korty Tenisowe Ze Sztucznej Trawy: Komfort i Profesjonalizm od Firmy Mcourt"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/XBA8r4MRcSnHlyj9Sz6N"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/XBA8r4MRcSnHlyj9Sz6N"}
                    title="Kort ze sztucznej trawy - Mazowsze"
                    subtitle="Nasza kompleksowa obsługa obejmuje projektowanie, budowę, oraz
                        regularne konserwacje i serwisowanie kortów. To idealne rozwiązanie dla miłośników
                        tenisa pragnących cieszyć się grą w komfortowych warunkach domowych."
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W 2023 nasza firma wykonała nowoczesny i profesjonalny <strong>kort ze sztucznej trawy</strong>.
                            Minimalna konserwacja oraz doskonałe warunki gry sprawiają, że korty te są idealnym
                            rozwiązaniem dla osób pragnących cieszyć się tenisem w komfortowych warunkach.
                        </h1>
                        <h2>
                            Firma <strong>Mcourt</strong> zapewnia kompleksową obsługę, począwszy od <strong>projektowania i budowy kortu</strong>,
                            aż po regularne konserwacje i serwisowanie. To doskonała oferta dla wszystkich, którzy
                            pragną cieszyć się tenisem w zaciszu własnego domu.
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
