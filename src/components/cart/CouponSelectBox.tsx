import React from "react";
import styled from "styled-components";
import { couponItem } from "../../types/coupon";
import { coupons } from "../../__mocks__/coupon";

const CouponSelectBox = () => {
  const [coupon, setCoupon] = React.useState({});

  React.useEffect(() => {
    if (coupons !== undefined) {
      setCoupon(coupons[0]);
    }
  }, []);

  return (
    <Container>
      <select
        name="coupons"
        value={JSON.stringify(coupon)}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCoupon(JSON.parse(e.target.value))}
      >
        {coupons.map((item: couponItem, index: number) => (
          <option value={JSON.stringify(item)} key={index}>
            {item.title}
          </option>
        ))}
      </select>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 16px;

  select {
    font-size: 20px;
    padding: 20px;
    width: 300px;
    text-align: center;
    border: 2px solid ${(props) => props.theme.color.shades["BLACK"]};
  }
`;

export default CouponSelectBox;
