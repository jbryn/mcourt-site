import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@/components/analytics/analytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <GoogleAnalytics
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_MEASURMENT_ID}
        />
        <Toaster position="bottom-right" />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
