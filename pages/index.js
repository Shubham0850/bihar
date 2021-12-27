import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Category from "../components/Category";
import Culture from "../components/Culture";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>BIHAR </title>
        <meta
          name="description"
          content="bihar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Culture/>
      <Category />
      <Footer />
    </div>
  );
}
