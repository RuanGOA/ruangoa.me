import React, { useEffect } from "react";

import { useConfig } from "../../contexts/config.context";

import BasePage from "../index";
import Profile from "../../components/Sections/Profile";
import Education from "../../components/Sections/Education";
import Awards from "../../components/Sections/Awards";
import Carrer from "../../components/Sections/Carrer";
import Courses from "../../components/Sections/Courses";

import { GridContent } from "./styled";

export default function PortfolioPage() {
  const { setPageNumber, setPageName, getFieldData } = useConfig();

  useEffect(() => {
    if (getFieldData) {
      const data = getFieldData("resumePage");
      setPageName(data.pageName);
      setPageNumber(data.pageNumber);
    }
  }, [getFieldData, setPageName, setPageNumber]);

  return (
    <BasePage>
      <GridContent>
        <Profile />
        <Education />
        <Carrer />
        <Awards />
        <Courses />
      </GridContent>
    </BasePage>
  );
}
