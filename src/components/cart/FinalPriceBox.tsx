import React, { useEffect } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { selectedCouponState } from "../../state/cartState";

const FinalPriceBox = ({
  totalPrice,
  discountType,
  discountAmount,
  discountRate,
  cantUsedCouponPrice,
}: {
  totalPrice: number;
  discountType: string;
  discountAmount?: number;
  discountRate?: number;
  cantUsedCouponPrice: number;
}) => {
  const canUsedCouponPrice = totalPrice - cantUsedCouponPrice;
  const setCoupon = useSetRecoilState(selectedCouponState);

  useEffect(() => {
    if (discountType === "amount" && discountAmount !== undefined) {
      if (canUsedCouponPrice < discountAmount) {
        alert("쿠폰 사용금액이 상품의 금액보다 클 수 없습니다.");
        setCoupon({
          type: "none",
          title: "선택안함",
        });
      }
    }
  }, [discountAmount, canUsedCouponPrice]);

  return (
    <Wrapper>
      <div className="price__item">
        <span className="small__text">주문금액</span>
        <span className="large__text">
          {totalPrice.toLocaleString("kr")}
          <span className="small__text">원</span>
        </span>
      </div>
      <div className="math__item">
        <span>-</span>
      </div>
      <div className="price__item">
        <span className="small__text">할인금액</span>
        <span className="large__text">
          {discountType === "none" && 0}
          {discountType === "amount" && discountAmount !== undefined && discountAmount.toLocaleString("kr")}
          {discountType === "rate" &&
            discountRate !== undefined &&
            (canUsedCouponPrice * (discountRate * 0.01)).toLocaleString("kr")}
          <span className="small__text">
            원
            {discountType === "rate" && (
              <>
                <br />
                <b>{discountRate}%</b> 할인
              </>
            )}
          </span>
        </span>
      </div>
      <div className="math__item">
        <span>=</span>
      </div>
      <div className="price__item">
        <span className="small__text">최종주문금액</span>
        <span className="large__text">
          {discountType === "none" && totalPrice.toLocaleString("kr")}
          {discountType === "amount" &&
            discountAmount !== undefined &&
            (canUsedCouponPrice - discountAmount + cantUsedCouponPrice).toLocaleString("kr")}
          {discountType === "rate" &&
            discountRate !== undefined &&
            (totalPrice - canUsedCouponPrice * (discountRate * 0.01)).toLocaleString("kr")}
          <span className="small__text">원</span>
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;

  .price__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    flex: 1;

    border: 2px solid ${(props) => props.theme.color.primary[400]};
  }

  .small__text {
    font-size: 24px;
    letter-spacing: 5px;
    font-weight: 500;
  }

  .large__text {
    font-size: 30px;
    font-weight: 700;
    margin-top: 10px;
  }

  .math__item {
    display: flex;
    flex: 0.5;
    align-items: center;
    justify-content: center;
    font-size: 70px;
  }
`;

export default FinalPriceBox;
