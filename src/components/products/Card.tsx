import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { IProduct } from "../../types/product";
import Image from "next/image";
import FillHeartImg from "../../../public/assets/fill-heart.png";
import EmptyHeartImg from "../../../public/assets/empty-heart.png";
import AddCartImg from "../../../public/assets/add-to-cart.png";
import RemoveCartImg from "../../../public/assets/remove-from-cart.png";

const Card = ({ item_no, item_name, detail_image_url, price, score }: IProduct) => {
  const router = useRouter();
  const [isLikeHover, setIsLikeHover] = useState<Boolean>(false);
  const [cartItems, setCartItems] = useState([]);
  const cartItem = sessionStorage.getItem("cartItem");

  useEffect(() => {
    if (cartItem) {
      setCartItems(JSON.parse(cartItem));
    }
  }, [cartItem]);

  const setSessionStorage = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(
        "cartItem",
        JSON.stringify([...cartItems, { item_no, item_name, detail_image_url, price }]),
      );
    }
  };

  const removedSessionStorage = (itemNo: number) => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("cartItem");
      sessionStorage.setItem("cartItem", JSON.stringify(cartItems.filter((item: IProduct) => item.item_no !== itemNo)));
    }
  };

  const handleAddCart = async () => {
    if (cartItems.length === 3) {
      alert("장바구니는 3개의 상품만 담을 수 있습니다.");
    } else {
      setSessionStorage();
      if (confirm("장바구니에 등록되었습니다. 장바구니로 이동하시겠습니까?")) {
        await router.push("/cart");
      }
    }
  };

  const handleRemoveCart = async (itemNo: number) => {
    removedSessionStorage(itemNo);
    alert("장바구니에서 삭제 되었습니다.");
  };


  return (
    <Container>
      <CardTitle>
        <Image
          src={`${detail_image_url}`}
          alt={`${item_name} 사진`}
          className="image"
          quality={100}
          width={500}
          height={500}
        />
      </CardTitle>
      <CardContent>
        <span className="item_name">{item_name}</span>
        <span className="price">
          {price.toLocaleString("ko-KR")}
          <span className="small__text">원</span>
        </span>
      </CardContent>
      <CardFooter>
        <div className="icon__box">
          {!isLikeHover ? (
            <Image
              src={EmptyHeartImg}
              alt={"좋아요"}
              className="icon__img"
              onMouseOver={() => setIsLikeHover(!isLikeHover)}
            />
          ) : (
            <Image
              src={FillHeartImg}
              alt={"좋아요 취소"}
              className="icon__img"
              onMouseLeave={() => setIsLikeHover(!isLikeHover)}
            />
          )}
          <span className={"small__text"}>{score}</span>
        </div>
        <div className="icon__box">
          {cartItems.some((item: IProduct) => item.item_no === item_no) ? (
            <Image
              src={RemoveCartImg}
              alt="장바구니에서 제거하기"
              className="icon__img"
              onClick={() => handleRemoveCart(item_no)}
            />
          ) : (
            <Image src={AddCartImg} alt={"장바구니에 담기"} className="icon__img" onClick={handleAddCart} />
          )}
        </div>
      </CardFooter>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 500px;
  //border: 1px solid ${(props) => props.theme.color.primary[400]};
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0;

  .image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .item_name {
    margin-top: 20px;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    word-break: keep-all;
  }

  .price {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
  }

  .small__text {
    font-size: 16px;
    font-weight: 400;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  .icon__box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .icon__img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-right: 5px;
  }
`;

export default Card;
