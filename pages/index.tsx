import Head from "next/head";
import MainCard from "../src/components/MainCard";

function Home() {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainCard
          imgUrl={`https://cdn.pixabay.com/photo/2015/08/25/11/49/stairs-906720_1280.jpg`}
          title="PRODUCTS"
          url="/products"
        />
      </main>
    </>
  );
}

export default Home;
