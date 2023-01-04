import React from "react";

import Menu from "../components/Menu/";
import Header from "../components/Header/";
import Footer from "../components/Footer/";

import { useConfig } from "../contexts/config.context";

import { Content } from "./style";

export default function Base({ children }) {
  const { theme } = useConfig();

  return (
    <>
      <Header />
      <Menu />
      <Content theme={theme}>
        {children}
        <Footer />
      </Content>
    </>
  );
}
