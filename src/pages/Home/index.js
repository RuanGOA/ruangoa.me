import React, { useEffect } from "react";

import Base from "../";

import { useConfig } from "../../contexts/config.context";

import { useLocation } from "react-router-dom";

import About from "../../components/Sections/About";
import Contact from "../../components/Sections/Contact";

import picture from "./pic.jpeg";

import { ColumnContent, Name, Picture } from "./style";

export default function Home() {
  const { setPageNumber, setPageName, getFieldData } = useConfig();

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    if (getFieldData) {
      const data = getFieldData("aboutPage");
      setPageName(data.pageName);
      setPageNumber(data.pageNumber);
    }
  }, [getFieldData, setPageName, setPageNumber]);

  return (
    <Base>
      <ColumnContent>
        <Name>Ruan Gomes</Name>
        <Picture src={picture} alt="Me near the ocean!" />
        <About />
        <Contact />
      </ColumnContent>
    </Base>
  );
}
