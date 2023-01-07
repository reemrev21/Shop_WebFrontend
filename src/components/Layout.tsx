import React from "react";
import Header from "./Header";
import { theme } from "../config/style/theme";
import GlobalStyle from "../config/style/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";

type AppLayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: AppLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  margin-top: 80px;
`;

export default Layout;
