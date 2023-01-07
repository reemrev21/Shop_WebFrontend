import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Header = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 71px 0 65px;
`;

export default Header;
