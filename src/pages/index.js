import Head from "next/head";
import HomeBanner from "@/components/layout/HomeBanner";
import Holiday from "@/components/Holiday";
import DreamSection from "@/components/DreamSection";
import TeaserSection from "@/components/TeaserSection";





export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <HomeBanner />
      <Holiday />
      <DreamSection />
      <TeaserSection />
    </>
  );
}
