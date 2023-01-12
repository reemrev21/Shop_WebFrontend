import React, { ReactNode } from "react";
import CustomLink from "./CustomLink";
import { useRouter } from "next/router";
import styled from "styled-components";

export interface INav {
  url: string;
  text: string | ReactNode;
}

function Navigation() {
  const navs: INav[] = [
    {
      url: "/products",
      text: "PRODUCTS",
    },
    {
      url: "/cart",
      text: "CART",
    },
  ];
  const router = useRouter();
  return (
    <Wrapper>
      {navs.map((el, idx) => {
        const isSelected = router.pathname.startsWith(el.url);

        return <CustomLink isSelected={isSelected} url={el.url} text={el.text} className="nav_item" key={idx} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;

  .nav_item {
    font-weight: 700;
    font-size: 36px;
  }

  .nav_item:not(:last-child) {
    margin-right: 40px;
  }

  .Selected {
    color: ${(props) => props.theme.color.primary[300]};
  }
`;

export default Navigation;
