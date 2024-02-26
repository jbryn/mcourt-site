import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Article from "@/components/article/article";

const images = [
    "https://media.graphassets.com/6AmV8ixhQgSiDCC19wxC",
    "https://media.graphassets.com/8Y1fFQvRk6x8MZHK1XA6",
    "https://media.graphassets.com/QFYcz9mQaue3zOx73ScO",
    "https://media.graphassets.com/ZiM9ke1S1ugol9yrKECA",
    "https://media.graphassets.com/nZRJoVzGRTakiicV4pSc",
    "https://media.graphassets.com/wDLJUQArQkW59Xds0czM",
    "https://media.graphassets.com/Zt1NXAQ5SQ2nUJPfHvnL",
    "https://media.graphassets.com/0h8o8z3UQU21Y8tMaR8j",
    "https://media.graphassets.com/mqlLWGrgRAigVs8I8tl5",
    "https://media.graphassets.com/eRB4HluKQxewhLAZrFd9",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Rewitalizacja kortu tenisowego na prywatnej posesji</title>
                <meta
                    name="description"
                    content="Rewitalizacja kortu tenisowego na prywatnej posesji"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Rewitalizacja kortu tenisowego na prywatnej posesji"
                />
                <meta
                    property="og:description"
                    content="Rewitalizacja kortu tenisowego na prywatnej posesji"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/s2rsBfiAQhmPh2OLuvyk"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/s2rsBfiAQhmPh2OLuvyk"}
                    title="Kort prywatny - Mazury"
                    subtitle="Rewitalizacja kortu tenisowego na prywatnej posesji"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Nasza firma przeprowadziła rewitalizację starej, ponad dwudziestoletniej płyty betonowej na prywatnej posesji znajdującej się na mazurach. Po dokładnym szlifowaniu, wszelkie szczeliny i spękania zostały starannie wypełnione specjalną masą, zapewniając trwałość i stabilność podbudowy. Następnie, aby nadać estetyczny charakter kortu, pokryliśmy ją nowoczesną, trwałą nawierzchnią ze sztucznej trawy Juta Fast Track. Teraz to miejsce nie tylko zachwyca swoim pięknem, ale także zapewnia komfortowy i przyjemny teren do relaksu i rekreacji.
                        </h1>

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
