import Layout from "@/components/Common/Layout";
import Seo from "@/components/Seo";
import { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Seo
          title="validation_form"
          keywords={["인풋 확인"]}
          descrption="이풋 확인창"
        />
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
export default MyApp;
