import React from 'react';
import Head from "next/head";
import Hero from "@/components/portfolio/hero/hero";
import Portfolio from '../components/portfolio/portfolio';
import Contact from "@/components/home/contact/contact";

const PortfolioPage = () => {
    const categories = ['wszystkie', 'korty akrylowe', 'korty ceglane', 'sztuczna trawa', 'hale tenisowe']; // replace with your actual categories

    return (
        <>
            <Head>
                <title>MCOURT | Realizacje</title>
                <meta
                    name="description"
                    content="Zobacz nasze realizacje i przekonaj się, że warto z nami współpracować"
                    key="desc"
                />
                <meta property="og:title" content="Tenis dla profesjonalistów" />
                <meta
                    property="og:description"
                    content="Zobacz nasze realizacje i przekonaj się, że warto z nami współpracować"
                />
                <meta
                    property="og:image"
                    content="https://media.graphassets.com/GAIKjn52QECZ8IAZgHUO"
                />
            </Head>

            <div className='pt-[200px] pb-[200px]'>
                <Hero
                    backgroundUrl={"https://media.graphassets.com/jujSnbwbTayd5QhAATWd"}
                    title="Realizacje"
                    subtitle={`Budujemy korty tenisowe od 2008 roku, naszym klientom proponujemy rozwiązania najlepszych światowych producentów`}
                />
                <Portfolio categories={categories} />
                <Contact
                    imageUrl={"https://media.graphassets.com/TI5dBSKRnaSPtrkOSniw"}
                />
            </div>
        </>
    );
};

export default PortfolioPage;