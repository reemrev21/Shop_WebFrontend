import React from "react";
import styled from "styled-components";
import { ICoupon } from "../../types/coupon";
import { couponsItems } from "../../__mocks__/coupon";
import { useRecoilState } from "recoil";
import { selectedCouponState } from "../../state/cartState";
import { useQuery } from "react-query";

const CouponSelectBox = () => {
  const { data: couponList } = useQuery("fetchCoupons", () => couponsItems);
  const [coupon, setCoupon] = useRecoilState(selectedCouponState);

  React.useEffect(() => {
    if (couponsItems !== undefined) {
      setCoupon({
        type: "none",
        title: "선택안함",
      });
    }
  }, []);

  return (
    <Container>
      <select
        name="coupons"
        value={JSON.stringify(coupon)}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCoupon(JSON.parse(e.target.value))}
      >
        {
          <option
            value={JSON.stringify({
              type: "none",
              title: "선택안함",
            })}
          >
            선택 안함
          </option>
        }
        {couponList &&
          couponList.map((item: ICoupon, index: number) => (
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
