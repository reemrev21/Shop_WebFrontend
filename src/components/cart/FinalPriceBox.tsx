import React from "react";
import styled from "styled-components";

const FinalPriceBox = () => {
  return (
    <Wrapper>
      <div className="price__item">
        <span className="small__text">주문금액</span>
        <span className="large__text">
          {10000}
          <span className="small__text">원</span>
        </span>
      </div>
      <div className="math__item">
        <span>-</span>
      </div>
      <div className="price__item">
        <span className="small__text">할인금액</span>
        <span className="large__text">
          {10000 * 0.1}
          <span className="small__text">
            원
            {"coupon" && (
              <>
                (<b>{10}%</b> 할인)
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
          {10000 * (1.0 - 0.1)}
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
