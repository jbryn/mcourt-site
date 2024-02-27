import React from 'react';
import Head from "next/head";
import Hero from "@/components/shared/hero/hero";
import Portfolio from '../components/portfolio/portfolio';
import Contact from "@/components/home/contact/contact";

import { useMediaQuery } from 'react-responsive';


const PortfolioPage = () => {
    const categories = ['wszystkie', 'korty akrylowe', 'korty ceglane', 'sztuczna trawa', 'hale tenisowe']; // replace with your actual categories

    const isMediumScreen = useMediaQuery({ minWidth: 1024 });
    const isLargeScreen = useMediaQuery({ minWidth: 1600 });
    const isXLargeScreen = useMediaQuery({ minWidth: 1920 });

    const offsetY = isXLargeScreen ? '-250px' : isLargeScreen ? '-200px' : isMediumScreen ? '0px' : '0px';

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

            <div className='pb-[200px]'>
                <Hero
                    backgroundUrl={"https://media.graphassets.com/IBxQH33SKCKMbnDHWS8d"}
                    title="Realizacje"
                    offsetY={offsetY}
                    subtitle="Nasze realizacje obejmują nie tylko imponujące ośrodki tenisowe, ale także prywatne inwestycje. Każdy z naszych projektów reprezentuje innowacyjne podejście i dbałość o detale, zapewniając naszym klientom nie tylko funkcjonalne, ale także estetyczne przestrzenie do gry w tenisa."
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