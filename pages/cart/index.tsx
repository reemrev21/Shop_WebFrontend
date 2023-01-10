import Head from "next/head";
import styled from "styled-components";
import Card from "../../src/components/cart/Card";
import { productItems } from "../../src/__mocks__/productsItems";
import { IProduct } from "../../src/types/product";
import CouponSelectBox from "../../src/components/cart/CouponSelectBox";
import FinalPriceBox from "../../src/components/cart/FinalPriceBox";

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
            <Title>상 품</Title>
            {productItems.map((item: IProduct) => (
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
          <div>
            <Title>쿠 폰</Title>
            <CouponSelectBox />
          </div>
          <div>
            <Title>최종주문금액</Title>
            <FinalPriceBox />
          </div>
        </Wrapper>
      </main>
    </>
  );
}

const Wrapper = styled.div`
  padding: 0 40px 100px 40px;
  display: grid;
  grid-row-gap: 20px;

  .price__wrapper {
    display: flex;
  }

  .price__item {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

const Title = styled.h2`
  margin-top: 10px;
  font-size: 35px;
  font-weight: 500;
`;

export default Cart;
