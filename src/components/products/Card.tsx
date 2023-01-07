import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Card = () => {
  const router = useRouter();

  return <Wrapper>item</Wrapper>;
};

const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.color.primary[400]}; ;
`;

export default Card;
