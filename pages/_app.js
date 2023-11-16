import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Toaster position="bottom-right" />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
