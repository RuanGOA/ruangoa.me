import { useContext, createContext, useEffect, useState, useRef } from "react";

import { data } from "../data/index";

export const ConfigContext = createContext({});

export function ConfigProvider(props) {
  const [pageNumber, setPageNumber] = useState(0);
  const [pageName, setPageName] = useState("");
  const [language, setLanguage] = useState("EN");
  const [theme, setTheme] = useState("dark");
  const [menuActive, setMenuActive] = useState(false);
  const contactRef = useRef(null);

  const getFieldData = (field) => {
    return data[language][field];
  };

  useEffect(() => {
    const themeStorage = localStorage.getItem("@ruangoa/theme");
    const languageStorage = localStorage.getItem("@ruangoa/language");

    setTheme(themeStorage || "dark");
    setLanguage(languageStorage || "EN");
  }, []);

  const contextValue = {
    pageNumber,
    setPageNumber,
    language,
    setLanguage,
    pageName,
    setPageName,
    theme,
    setTheme,
    getFieldData,
    menuActive,
    setMenuActive,
    contactRef,
  };

  useEffect(() => {
    localStorage.setItem("@ruangoa/theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("@ruangoa/language", language);
  }, [language]);

  useEffect(() => {
    document.title = `@ruangoa - ${pageName}`;
    window.scrollTo(0, 0);
  }, [pageName]);

  return (
    <ConfigContext.Provider value={contextValue}>
      {props.children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);

  return { ...context };
}
