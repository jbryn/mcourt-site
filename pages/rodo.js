import React from 'react';
import Head from 'next/head';

const RodoPage = () => {
    return (
        <>
            <Head>
                <title>Polityka prywatności</title>
            </Head>

            <embed
                src="/docs/rodo.pdf"
                type="application/pdf"
                className="w-full h-screen"
            />


        </>
    );
};

export default RodoPage;