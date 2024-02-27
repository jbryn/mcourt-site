import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Article from "@/components/article/article";

const images = [
    "https://media.graphassets.com/PXH09ymFRt6Ob53sYWrN",
    "https://media.graphassets.com/zFzzv5q9Qze6LRDJg5Py",
    "https://media.graphassets.com/K65MoJzjSA6WHgBILFTh",
    "https://media.graphassets.com/1jNJtgwaTilxZl56VkFw",
    "https://media.graphassets.com/TeFdChtMS1mzW1z1AqDB",
    "https://media.graphassets.com/oev0x6rR3ucTiVVoXC8G",
    "https://media.graphassets.com/rjhTDdNESq1zj4DPTHkw",
    "https://media.graphassets.com/fZ1uIm0DQp6to0DcFTRw",
    "https://media.graphassets.com/tPRlgkfjQ72rEPWxaY5n",
];

export default function PrywatnyWarmiaPage() {
    return (
        <>
            <Head>
                <title>Hala tenisowa - Gniezno</title>
                <meta
                    name="description"
                    content="Hala tenisowa - Gniezno"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Hala tenisowa - Gniezno"
                />
                <meta
                    property="og:description"
                    content="Hala tenisowa - Gniezno"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/5zdtLaRRAiYinj5jzoaA"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/5zdtLaRRAiYinj5jzoaA"}
                    title="Hala tenisowa - Gniezno"
                    subtitle="Hala tenisowa - Gniezno"
                />
                <section className="grid place-items-center pb-[100px]">
                    <div className="flex flex-col gap-[60px] px-[40px] max-w-[1000px]">
                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Hala tenisowa - Gniezno
                        </h1>
                        <h2>

                        </h2>
                        <h2>

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
