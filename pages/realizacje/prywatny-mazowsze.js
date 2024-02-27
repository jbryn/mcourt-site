import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Article from "@/components/article/article";

const images = [
    "https://media.graphassets.com/Pp3bwuO6T8GYKdwWsIPD",
    "https://media.graphassets.com/3ec8pF5TTFiw9wOOkLju",
    "https://media.graphassets.com/OvHVLPKrSt2fWKqEUfXg",

    "https://media.graphassets.com/1pc2FneNQkSaeCpuwuyB",
    "https://media.graphassets.com/Qs8ga3SuQfGd0GRuwPqh",
    "https://media.graphassets.com/yuJ7ygx2SDiVdUWjhk4x",

    "https://media.graphassets.com/fTZr2fV8QnyKyHeDy1O4",
    "https://media.graphassets.com/QrhA0026QBm74ylRqguR",
];

export default function PrywatnyMazowszePage() {
    return (
        <>
            <Head>
                <title>Realizacje | Retopping przydomowego kortu</title>
                <meta
                    name="description"
                    content="Nowoczesna renowacja kortów akrylowych na prywatnych posesjach. Metoda retoppingu, włączająca naprawę podbudowy oraz ułożenie nowej warstwy akrylu przynosi nowe życie dla kortów"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Realizacje | Retopping przydomowego kortu"
                />
                <meta
                    property="og:description"
                    content="Nowoczesna renowacja kortów akrylowych na prywatnych posesjach. Metoda retoppingu, włączająca naprawę podbudowy oraz ułożenie nowej warstwy akrylu przynosi nowe życie dla kortów"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/MJFer4wtRaGOMmmAhNe3"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/MJFer4wtRaGOMmmAhNe3"}
                    title="Retopping przydomowego kortu"
                    subtitle="Nowoczesna renowacja kortów akrylowych na prywatnych posesjach. Metoda retoppingu, włączająca naprawę podbudowy oraz ułożenie nowej warstwy akrylu przynosi nowe życie dla kortów"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W dzisiejszych czasach, dbanie o wysoką jakość infrastruktury sportowej na prywatnych posesjach staje się coraz bardziej istotne. W województwie mazowieckim, właściciele prywatnych kortów tenisowych wybierają nowoczesne podejście do renowacji - metoda retoppingu.
                        </h1>
                        <h2>
                            Metoda retoppingu to innowacyjna technika, która pozwala na efektywne odnowienie nawierzchni kortu, przy minimalnym zakłóceniu codziennej aktywności. Polega ona na punktowej naprawie spęknięć podbudowy oraz ułożeniu nowych warstw akrylu, takich jak popularny Laykold Master Color.
                        </h2>
                        <h2>
                            Wybór akrylowej nawierzchni Laykold Master Color to gwarancja wysokiej jakości oraz estetycznego wyglądu kortu. Dostępność różnorodnych kolorów pozwala dostosować wygląd kortu do indywidualnych preferencji, tworząc elegancki i nowoczesny wystrój.
                        </h2>
                        <h2>
                            Odnawianie kortów tenisowych to nie tylko kwestia utrzymania ich w dobrym stanie technicznym, ale także inwestycja w przyjemność i komfort użytkowników.
                        </h2>
                        <h2>
                            Jeżeli chciałbyś odnowić swój przydomowy kort, skontaktuj się z nami już dziś!
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

                </section>

                <Contact
                    imageUrl={"https://media.graphassets.com/fDKZW0brSNSOAvU4u0tv"}
                />
            </main>
        </>
    );
}
