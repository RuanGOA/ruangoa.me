import React from "react";

import { useConfig } from "../../contexts/config.context";

import { LanguageContainer, LanguageItem } from "./styled";

export default function ChangeLanguage() {
  const { language, setLanguage, theme, menuActive } = useConfig();

  const data = ["PT", "EN"];

  return (
    <LanguageContainer>
      {data.map((item) => (
        <LanguageItem
          key={item}
          onClick={() => setLanguage(item)}
          className={language === item ? "active" : ""}
          theme={theme}
          menu={menuActive}
        >
          {item}
        </LanguageItem>
      ))}
    </LanguageContainer>
  );
}
