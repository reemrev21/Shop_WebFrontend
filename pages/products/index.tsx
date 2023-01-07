import Head from "next/head";
import styled from "styled-components";
import Card from "../../src/components/products/Card";

function Products() {
  return (
    <>
      <Head>
        <title>Shop || Products</title>
        <meta name="description" content="Shop Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Wrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Wrapper>
      </main>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export default Products;
