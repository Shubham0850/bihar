import Head from "next/head";
import Category from "../components/Category";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import WhatWeDo from "../components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aritstry</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <WhatWeDo />
      <Category />
      <Testimonial />
      <Contact/>
    </div>
  );
}
