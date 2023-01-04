import React from "react";

import ChangeLanguage from "../ChangeLanguage";
import ChangeTheme from "../ChangeTheme";
import ContactButton from "../ContactButton";

import { useConfig } from "../../contexts/config.context";

import { HeaderContent, UtilContainer } from "./style";

export default function Header() {
  const { theme, menuActive } = useConfig();

  return (
    <HeaderContent theme={theme} menu={menuActive}>
      <span></span>
      <UtilContainer>
        <ChangeLanguage />
        <ContactButton />
        <ChangeTheme />
      </UtilContainer>
    </HeaderContent>
  );
}
