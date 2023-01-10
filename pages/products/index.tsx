import Head from "next/head";
import styled from "styled-components";
import Card from "../../src/components/products/Card";
import { productItems } from "../../src/__mocks__/productsItems";
import { IProduct } from "../../src/types/product";
import React from "react";
import { useQuery } from "react-query";

function Products() {
  const { status, data: productsList, error } = useQuery("fetchProducts", () => productItems);

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  // if (status === "error") {
  //   return <span>Error: {error.message}</span>;
  // }

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
          {productsList &&
            productsList.map((item: IProduct) => (
              <Card
                key={item.item_no}
                item_no={item.item_no}
                item_name={item.item_name}
                detail_image_url={item.detail_image_url}
                price={item.price}
                score={item.score}
              />
            ))}
        </Wrapper>
      </main>
    </>
  );
}

const Wrapper = styled.div`
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export default Products;
