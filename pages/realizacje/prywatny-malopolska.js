import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Article from "@/components/article/article";

const images = [
    "https://media.graphassets.com/t1CFjP7xQGWIgSCNVqDY",
    "https://media.graphassets.com/4DGL69FATxGAc9Z0PJZU",
    "https://media.graphassets.com/DahJ0Y7MTNaOJgjbesO8",

    "https://media.graphassets.com/bV2qcjPLRUanvNuiQFig",
    "https://media.graphassets.com/dDbKWlXnSOmMkWKcY7mr",
    "https://media.graphassets.com/KxqchgJ3TnKUdhTC4P8f",

    "https://media.graphassets.com/5Nhs5uAsQriH2HpFYsoX",
    "https://media.graphassets.com/nyElvVD5TfGOy7ywWLjF",
    "https://media.graphassets.com/fDXzklVhQEqxbVmpLDAF",

    "https://media.graphassets.com/MztdQs5wTeSlsGzMrcLi",
    "https://media.graphassets.com/JEDvZulURburS1bxMgUL",
    "https://media.graphassets.com/EpPjB2rWRiiN5iEEkz9U",

    "https://media.graphassets.com/cVboTgzIT8GmR1AEeTQA",
    "https://media.graphassets.com/R34CBlCnSEiTCRHv3Tr5",
    "https://media.graphassets.com/zIQb2jfLQ7OIUGecj4Al",
];

export default function PrywatnyMalopolskaPage() {
    return (
        <>
            <Head>
                <title>Realizacje | Pierwszy w Polsce Kort Tenisowy z Nawierzchnią Jak na Turnieju US Open!</title>
                <meta
                    name="description"
                    content="Nasza firma z dumą ogłasza ukończenie budowy pierwszego w Polsce kortu tenisowego z nawierzchnią, która równa się tej z prestiżowego turnieju US Open. "
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Realizacje | Pierwszy w Polsce Kort Tenisowy z Nawierzchnią Jak na Turnieju US Open!"
                />
                <meta
                    property="og:description"
                    content="Nasza firma z dumą ogłasza ukończenie budowy pierwszego w Polsce kortu tenisowego z nawierzchnią, która równa się tej z prestiżowego turnieju US Open. "
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/pO5ECj4bRIKq8bKy073i"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/pO5ECj4bRIKq8bKy073i"}
                    title="Pierwszy w Polsce Kort Tenisowy z Nawierzchnią Jak na Turnieju US Open!"
                    subtitle="Nasza firma z dumą ogłasza ukończenie budowy pierwszego w Polsce kortu tenisowego z nawierzchnią, która równa się tej z prestiżowego turnieju US Open. "
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Nasza firma zrealizowała tę innowacyjną inwestycję prywatną, starannie wykonując każdy etap procesu. Nasz zakres prac obejmował kompleksowe przygotowanie podbudowy, profesjonalne ułożenie płyty betonowej, montaż solidnego ogrodzenia oraz, co najważniejsze, zastosowanie najwyższej jakości nawierzchni kortu tenisowego.
                        </h1>
                        <h2>
                            Nawierzchnia Laykold Masters 5, znana z prestiżowego turnieju US Open, to gwarancja doskonałych warunków do gry. Dzięki niej możesz doświadczyć niepowtarzalnego komfortu i precyzji podczas każdego uderzenia. Jest to doskonały wybór dla wszystkich miłośników tenisa, którzy pragną doskonalić swoje umiejętności na profesjonalnym poziomie.
                        </h2>
                        <h2>
                            Oferując kompleksowe usługi, zapewniamy nie tylko wysoką jakość nawierzchni, ale także pełne wsparcie w realizacji Twoich potrzeb. Nasz zespół doświadczonych specjalistów zadbał o każdy detal, abyś mógł cieszyć się kompletnym i funkcjonalnym kortem tenisowym.
                        </h2>
                        <h2>
                            Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o oferowanych przez nas nawierzchniach tenisowych.
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
