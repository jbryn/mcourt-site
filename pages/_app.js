import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>mcourt - tenis dla profesjonalistów</title>
        <meta
          name="description"
          content="Doświadcz jakości i precyzji wykonania naszych kortów"
          key="desc"
        />
        <meta
          property="og:title"
          content="mcourt - tenis dla profesjonalistów"
        />
        <meta
          property="og:description"
          content="Doświadcz jakości i precyzji wykonania naszych kortów"
        />
        <meta property="og:image" content="./logos/mcourt-logo-color.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
