import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import dynamic from "next/dynamic";

const Header = () => {
  const DynamicNavigation = dynamic(() => import("./Navigation"));

  return (
    <Wrapper>
      <Logo />
      <DynamicNavigation />
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
