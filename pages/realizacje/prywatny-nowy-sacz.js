import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Article from "@/components/article/article";

const images = [
    "https://media.graphassets.com/9p99jn5QfqxQlm6kxgkd",
    "https://media.graphassets.com/PvEImkW1QbKaP61ndIj9",
    "https://media.graphassets.com/vBk8NJGmSUGKyzd2Lcua",
    "https://media.graphassets.com/EddluIVQaSt7NTelpjfQ",
    "https://media.graphassets.com/w5BQ4rOoS3CVA2QRO7tb",
    "https://media.graphassets.com/foTp0YvTQriojSQFdLuA",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Kort prywatny - Nowy Sącz</title>
                <meta
                    name="description"
                    content="Nowoczesny kort tenisowy w malowniczym miejscu: luksus i wygoda w prywatnej rezydencji"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort prywatny - Nowy Sącz"
                />
                <meta
                    property="og:description"
                    content="Nowoczesny kort tenisowy w malowniczym miejscu: luksus i wygoda w prywatnej rezydencji"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/sQr7dglMRRG7I9FC5120"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/sQr7dglMRRG7I9FC5120"}
                    title="Kort prywatny - Nowy Sącz"
                    subtitle="Nowoczesny kort tenisowy w malowniczym miejscu: luksus i wygoda w prywatnej rezydencji"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Budowa nowoczesnego kortu tenisowego ze sztucznej trawy w prywatnej rezydencji w okolicach Nowego Sącza. Nasze prace obejmowały kompleksowy zakres działań, począwszy od profilowania podbudowy, poprzez projekt i montaż estetycznego ogrodzenia, aż po instalację nowoczesnego oświetlenia. Ponadto, ułożyliśmy wysokiej jakości nawierzchnię, zapewniającą idealne warunki do gry w tenisa i nie tylko. Dzięki naszemu doświadczeniu i zaangażowaniu, klient może teraz cieszyć się wyjątkowym kortem tenisowym, który spełnia najwyższe standardy zarówno pod względem funkcjonalności, jak i estetyki.
                        </h1>
                        <h2>
                            Luksusowy kort tenisowy ze sztucznej trawy w górskich okolicach - kompleksowa oferta na produkcje i wykonanie kortu tenisowego
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
