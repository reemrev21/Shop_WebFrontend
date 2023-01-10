import React from "react";
import styled from "styled-components";
import { productItem } from "../../types/product";
import Image from "next/image";
import plusImg from "../../../public/assets/plus.png";
import minusImg from "../../../public/assets/minus.png";

const Card = ({ item_no, item_name, detail_image_url, price, score }: productItem) => {
  const [count, setCount] = React.useState(0);

  return (
    <Container>
      <CardTitle>
        <Image
          src={`${detail_image_url}`}
          alt={`${item_name} 사진`}
          className="image"
          quality={100}
          width={200}
          height={200}
        />
        <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
          <span className="item_name">{item_name}</span>
          <span className="price">{price.toLocaleString("ko-KR")}원</span>
        </div>
      </CardTitle>
      <CardContent>
        <Image src={minusImg} alt="수량 빼기" className="icon" />
        <input
          value={count}
          type="number"
          className="input__count"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCount(Number(e.target.value))}
        />
        <Image src={plusImg} alt="수량 추가" className="icon" />
      </CardContent>
      <CardContent>
        <span className="large__text">
          {price.toLocaleString("ko-KR")}
          <span className="small__text">원</span>
        </span>
      </CardContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 250px;
  padding: 16px;

  :not(:last-child) {
    border-bottom: 2px solid ${(props) => props.theme.color.shades["BLACK"]};
  }
`;

const CardTitle = styled.div`
  flex: 1;
  display: flex;

  .image {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  .item_name {
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    word-break: keep-all;
  }

  .price {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 500;
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  .input__count {
    width: 80px;
    height: 40px;
    margin: 0 10px;
    text-align: center;
    border: 2px solid ${(props) => props.theme.color.primary[400]};
  }

  .small__text {
    font-size: 16px;
    font-weight: 400;
  }

  .large__text {
    font-size: 22px;
    font-weight: 700;
  }

  .icon {
    width: 20px;
    height: 20px;
  }
`;

export default Card;
