import Head from "next/head";
import styled from "styled-components";
import Card from "../../src/components/cart/Card";
import { productItems } from "../../src/__mocks__/productsItems";
import { productItem } from "../../src/types/product";

function Cart() {
  return (
    <>
      <Head>
        <title>Shop || Cart</title>
        <meta name="description" content="Shop Cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Wrapper>
          <div>
            <h2>상품</h2>
            {productItems.map((item: productItem) => (
              <Card
                key={item.item_no}
                item_no={item.item_no}
                item_name={item.item_name}
                detail_image_url={item.detail_image_url}
                price={item.price}
                score={item.score}
              />
            ))}
          </div>
        </Wrapper>
      </main>
    </>
  );
}

const Wrapper = styled.div`
  padding: 0 16px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 20px;
`;

export default Cart;
