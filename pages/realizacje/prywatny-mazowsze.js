import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";

const images = [
    "https://media.graphassets.com/Qs8ga3SuQfGd0GRuwPqh",
    "https://media.graphassets.com/1pc2FneNQkSaeCpuwuyB",
    "https://media.graphassets.com/fTZr2fV8QnyKyHeDy1O4",
    "https://media.graphassets.com/QrhA0026QBm74ylRqguR",
    "https://media.graphassets.com/OvHVLPKrSt2fWKqEUfXg",
    "https://media.graphassets.com/3ec8pF5TTFiw9wOOkLju",
    "https://media.graphassets.com/Pp3bwuO6T8GYKdwWsIPD",
    "https://media.graphassets.com/yuJ7ygx2SDiVdUWjhk4x",
];

export default function PrywatnyMazowszePage() {
    return (
        <>
            <Head>
                <title>Kort akrylowy - Mazowsze</title>
                <meta
                    name="description"
                    content="Nowoczesna renowacja kortów akrylowych na prywatnych posesjach. Metoda retoppingu, włączająca naprawę podbudowy oraz ułożenie nowej warstwy akrylu przynosi nowe życie dla kortów"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort akrylowy - Mazowsze"
                />
                <meta
                    property="og:description"
                    content="Nowoczesna renowacja kortów akrylowych na prywatnych posesjach. Metoda retoppingu, włączająca naprawę podbudowy oraz ułożenie nowej warstwy akrylu przynosi nowe życie dla kortów"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/6MsEWoprRA6UWJ9UYLHx"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/6MsEWoprRA6UWJ9UYLHx"}
                    title="Kort akrylowy - Mazowsze"
                    subtitle="Nowoczesna renowacja kortów akrylowych na prywatnych posesjach. Metoda retoppingu, włączająca naprawę podbudowy oraz ułożenie nowej warstwy akrylu przynosi nowe życie dla kortów"
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            W dzisiejszych czasach, dbanie o wysoką jakość infrastruktury sportowej na <strong>prywatnych posesjach</strong> staje się coraz bardziej istotne. W województwie mazowieckim, właściciele <strong>prywatnych kortów tenisowych</strong> wybierają nowoczesne podejście do renowacji - metoda <strong>retoppingu</strong>.
                        </h1>
                        <h2>
                            Metoda retoppingu to innowacyjna technika, która pozwala na efektywne odnowienie nawierzchni kortu, przy minimalnym zakłóceniu codziennej aktywności. Polega ona na punktowej naprawie spęknięć podbudowy oraz ułożeniu nowych warstw akrylu, takich jak popularny <strong>Laykold Master Color</strong>.
                        </h2>
                        <h2>
                            Wybór <strong>akrylowej nawierzchni Laykold Master Color</strong> to gwarancja wysokiej jakości oraz estetycznego wyglądu kortu. Dostępność różnorodnych kolorów pozwala dostosować wygląd kortu do indywidualnych preferencji, tworząc elegancki i nowoczesny wystrój.
                        </h2>
                        <h2>
                            <strong>Odnawianie kortów tenisowych</strong> to nie tylko kwestia utrzymania ich w dobrym stanie technicznym, ale także inwestycja w przyjemność i komfort użytkowników.
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
