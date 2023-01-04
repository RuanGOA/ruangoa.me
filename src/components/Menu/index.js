import React from "react";

import SocialButtons from "../SocialButtons";
import PageList from "../PageList";

import { useNavigate } from "react-router-dom";

import { ReactComponent as PortfolioIcon } from "./assets/icon.svg";

import { useConfig } from "../../contexts/config.context";

import { Aside, RedirectsContainer, AsideToggler, Toggler } from "./style";

export default function Menu() {
  const { menuActive, setMenuActive } = useConfig();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <AsideToggler className={menuActive ? "active" : ""} onClick={toggleMenu}>
        <Toggler />
      </AsideToggler>
      <Aside className={menuActive ? "active" : ""}>
        <RedirectsContainer>
          <PortfolioIcon onClick={() => navigate("/")} />
          <PageList />
        </RedirectsContainer>
        <SocialButtons />
      </Aside>
    </>
  );
}
