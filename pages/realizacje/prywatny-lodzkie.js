import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Article from "@/components/article/article";

const images = [
    "https://media.graphassets.com/brpdxjnFSJieJ3j70eKA",
    "https://media.graphassets.com/9TR5Dfn7SISwP734f9WL",
    "https://media.graphassets.com/T3udvk5hSYaL82kuSSs9",
    "https://media.graphassets.com/mkpMYr7jSwuzPKzZ7Nf8",
    "https://media.graphassets.com/XGOzPJCtR4erm91E72XI",
    "https://media.graphassets.com/fq47NwyhRsCHUaO9KQHx",
    "https://media.graphassets.com/39O7hqSBSTeeGPxOtdfP",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Kort ceglany - woj. Łódzkie</title>
                <meta
                    name="description"
                    content="Budowa Kortu Tenisowego dla Klientów Prywatnych: Zapraszamy do Współpracy!"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Kort ceglany - woj. Łódzkie"
                />
                <meta
                    property="og:description"
                    content="Budowa Kortu Tenisowego dla Klientów Prywatnych: Zapraszamy do Współpracy!"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/9qdgihK1SkGgUVtVlsRw"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/9qdgihK1SkGgUVtVlsRw"}
                    title="Kort ceglany - woj. Łódzkie"
                    subtitle="Budowa Kortu Tenisowego dla Klientów Prywatnych: Zapraszamy do Współpracy!"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Czy marzysz o posiadaniu własnego kortu tenisowego, gdzie możesz doskonalić swoje umiejętności lub po prostu spędzać czas na aktywności na świeżym powietrzu? Teraz Twoje marzenie może się spełnić!
                        </h1>
                        <h2>
                            Nasza firma zajęła się kompleksową budową kortu, obejmującą przygotowanie podbudowy, precyzyjne wyprofilowanie terenu za pomocą specjalistycznych urządzeń oraz wykonanie nawierzchni z mączki ceglanej.
                        </h2>
                        <h2>
                            Niezależnie od tego, czy jesteś początkującym graczem, czy doświadczonym weteranem, nasz kort oferuje doskonałe warunki do gry i doskonalenia umiejętności. Dzięki solidnej konstrukcji i wysokiej jakości materiałom możesz być pewien, że Twój kort będzie służył Ci przez wiele lat.
                        </h2>
                        <h2>
                            Zapraszamy wszystkich zainteresowanych klientów prywatnych do kontaktu z nami i rozpoczęcia współpracy.
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
