import Head from "next/head";
import styled from "styled-components";
import Card from "../../src/components/cart/Card";
import { IProduct, IProductWithCount } from "../../src/types/product";
import CouponSelectBox from "../../src/components/cart/CouponSelectBox";
import FinalPriceBox from "../../src/components/cart/FinalPriceBox";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { checkedItemState, selectedCouponState } from "../../src/state/cartState";

function Cart() {
  const cartItem = typeof window !== "undefined" ? sessionStorage.getItem("cartItem") : null;
  const [cartItems, setCartItems] = useState([]);
  const [checkedNum, setCheckedNum] = useRecoilState(checkedItemState);
  const [selectedItem, setSelectedItem] = useState<Array<IProductWithCount>>([]);
  const [newCartItems, setNewCartItems] = useState<Array<IProduct>>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const selectedCoupon = useRecoilValue(selectedCouponState);

  useEffect(() => {
    if (cartItem) {
      setCartItems(JSON.parse(cartItem));
      setCheckedNum(JSON.parse(cartItem).map((item: IProduct) => item.item_no));
    }
  }, [cartItem]);

  useEffect(() => {
    setSelectedItem(cartItems.filter((item: IProductWithCount) => checkedNum.some((i) => i === item.item_no)));
  }, [cartItems, checkedNum]);

  useEffect(() => {
    setTotalPrice(selectedItem.map((item: IProductWithCount) => item.price * item.count).reduce((a, b) => a + b, 0));
  }, [selectedItem, selectedItem.map((item) => item.count)]);

  if (cartItems.length === 0) {
    return <NoDataWrapper>장바구니에 상품을 담아주세요!</NoDataWrapper>;
  }

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
            {cartItems &&
              cartItems.map((item: IProduct) => (
                <Card
                  key={item.item_no}
                  item_no={item.item_no}
                  item_name={item.item_name}
                  detail_image_url={item.detail_image_url}
                  price={item.price}
                  availableCoupon={item.availableCoupon}
                  count={item.count}
                  cartItems={cartItems}
                  setCartItems={setNewCartItems}
                />
              ))}
          </div>
          <div>
            <Title>쿠 폰</Title>
            <CouponSelectBox />
          </div>
          <div>
            <Title>최종주문금액</Title>
            <FinalPriceBox
              totalPrice={totalPrice}
              discountType={selectedCoupon.type}
              discountAmount={selectedCoupon.discountAmount}
              discountRate={selectedCoupon.discountRate}
              cantUsedCouponPrice={selectedItem
                .filter((item) => item.availableCoupon === false)
                .map((item) => item.price * item.count)
                .reduce((a, b) => a + b, 0)}
            />
          </div>
        </Wrapper>
      </main>
    </>
  );
}

const NoDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  font-size: 25px;
  font-weight: 500;
`;

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
