import Head from "next/head";
import HomeBanner from "@/components/layout/HomeBanner";
import Holiday from "@/components/Holiday";





export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <HomeBanner />
      <Holiday />
    </>
  );
}
