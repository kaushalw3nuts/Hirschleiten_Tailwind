import Head from "next/head";
import HomeBanner from "@/components/layout/HomeBanner";





export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <HomeBanner />
    </>
  );
}
