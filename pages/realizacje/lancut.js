import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Image from "next/image";
import Contact from "@/components/home/contact/contact";
import Link from "next/link";


import { useMediaQuery } from 'react-responsive';

const images = [
    "https://media.graphassets.com/z0ynOL5QYawc1M98R6YJ",
    "https://media.graphassets.com/EPyNFGz7RiexxU5Y1FJ4",
    "https://media.graphassets.com/7JjL8sxKTSu0JylQHFTm",
    "https://media.graphassets.com/dzY4g8TpQRS0wAlZjXFZ",
    "https://media.graphassets.com/56Ve2bZ0RFiLa6Rum0eK",
    "https://media.graphassets.com/jK7ZzUiQr21Fn7Nd5sNw",
    "https://media.graphassets.com/Tw24NgGcSjikLJN8pdiG",
    "https://media.graphassets.com/j6iW3KzqTgWTk5ylIhKX",
    "https://media.graphassets.com/PM2PplaTTj4tICVXI1Rm",
    "https://media.graphassets.com/YovLZMRjT1DBCC6pP6fO",
];

export default function Lancut() {

    const isMediumScreen = useMediaQuery({ minWidth: 1424 });
    const isLargeScreen = useMediaQuery({ minWidth: 1700 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-600px' : isLargeScreen ? '-400px' : isMediumScreen ? '-270px' : '0px';

    return (
        <>
            <Head>
                <title>Profesjonalny Kort Tenisowy z nawierzchnią Laykold w Łańcucie</title>
                <meta
                    name="description"
                    content="Wykonanie Kortu Tenisowego z nawierzchnią Laykold Masters 5 dla Hotelu Sokół"
                    key="desc"
                />
                <meta
                    property="og:title"
                    content="Profesjonalny Kort Tenisowy z nawierzchnią Laykold w Łańcucie"
                />
                <meta
                    property="og:description"
                    content="Wykonanie Kortu Tenisowego z nawierzchnią Laykold Masters 5 dla Hotelu Sokół"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/i9A5NuhKTpacPtoTCFnz"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero
                    backgroundUrl={"https://media.graphassets.com/i9A5NuhKTpacPtoTCFnz"}
                    title="Profesjonalny Kort Tenisowy z nawierzchnią Laykold w Łańcucie"
                    offsetY={offsetY}
                // subtitle="Prace nad dwoma kortami tenisowymi z nawierzchnią Laykold Master Color we Wrocławiu nabierają tempa, obiecując dostarczyć wysoką jakość gry i integrację społeczności poprzez sport."
                />
                <section className="grid place-items-center pb-[60px]">
                    <div className="flex flex-col gap-[30px] px-[40px] max-w-[1000px]">

                        <h1 className="text-[26px] max-[600px]:text-[20px] font-bold">
                            Nasza firma zrealizowała nowoczesny kort tenisowy w miejscowości <strong>Łańcut dla Hotelu Sokół</strong>.
                        </h1>
                        <h2>
                            Wykorzystaliśmy wysokiej jakości nawierzchnię <strong>Laykold Masters 5</strong>, która gwarantuje doskonałe warunki do gry oraz długą trwałość. Kort ten jest idealnym miejscem zarówno dla zawodowych sportowców, jak i amatorów, którzy chcą cieszyć się grą w tenisa w komfortowych warunkach. Dziękujemy <strong>Hotelowi Sokół</strong> za zaufanie i możliwość współpracy przy tym projekcie.
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
