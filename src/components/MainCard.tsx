import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export interface IMainCard {
  imgUrl?: string;
  title: string;
  url: string;
}

const MainCard = ({ imgUrl, title, url }: IMainCard) => {
  const router = useRouter();

  return (
    <Wrapper style={{ backgroundImage: `url(${imgUrl})` }}>
      <Button onClick={() => router.push(url)}>{title}</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Button = styled.button`
  width: 300px;
  height: 80px;
  border: 3px solid ${(props) => props.theme.color.shades["WHITE"]};
  border-radius: 5px;

  font-size: 40px;
  font-weight: 500;
  color: ${(props) => props.theme.color.shades["WHITE"]};

  :hover {
    border: 3px solid ${(props) => props.theme.color.primary[200]};
    color: ${(props) => props.theme.color.primary[200]};
  }
`;

export default MainCard;
