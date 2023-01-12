import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import plusImg from "../../../public/assets/plus.png";
import minusImg from "../../../public/assets/minus.png";
import { useRecoilState, useSetRecoilState } from "recoil";
import { checkedItemState } from "../../state/cartState";

const Card = ({
  item_no,
  item_name,
  detail_image_url,
  price,
  count,
  availableCoupon,
}: {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score?: number;
  availableCoupon?: boolean;
  count?: number;
}) => {
  const [itemCount, setItemCount] = useState(1);
  const orderPrice = price * itemCount;
  const [isSelected, setIsSelected] = useState(true);
  const [checkedItem, setCheckedItem] = useRecoilState(checkedItemState);

  useEffect(() => {
    setItemCount(Number(count));
  }, [count]);

  useEffect(() => {
    if (itemCount === 0) {
      setItemCount(1);
    }
  }, [itemCount]);

  useEffect(() => {
    if (!isSelected) {
      setCheckedItem(checkedItem.filter((item) => item !== item_no));
    } else if (isSelected && !checkedItem.includes(item_no)) {
      setCheckedItem([...checkedItem, item_no]);
    }
  }, [isSelected]);

  const handleCountPlus = () => {
    setItemCount((count) => count + 1);
  };

  const handleCountMinus = () => {
    setItemCount((count) => count - 1);
  };

  return (
    <Container>
      <CardTitle>
        <input
          type="checkbox"
          className="checkbox"
          onChange={(event) => setIsSelected(event.target.checked)}
          checked={checkedItem.includes(item_no)}
        />
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
          {!availableCoupon && availableCoupon !== undefined && <span>(쿠폰 적용 불가)</span>}
        </div>
      </CardTitle>
      <CardContent>
        <Image src={minusImg} alt="수량 빼기" className="icon" onClick={handleCountMinus} />
        <input
          value={Number(itemCount.toString().replace(/(^0+)/, ""))}
          type="number"
          className="input__count"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setItemCount(Number(e.target.value))}
        />
        <Image src={plusImg} alt="수량 추가" className="icon" onClick={handleCountPlus} />
      </CardContent>
      <CardContent>
        <span className="large__text">
          {orderPrice.toLocaleString("ko-KR")}
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

  .checkbox {
    margin-right: 20px;
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
    border: 2px solid ${(props) => props.theme.color.shades["BLACK"]};
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
    cursor: pointer;
  }
`;

export default Card;
