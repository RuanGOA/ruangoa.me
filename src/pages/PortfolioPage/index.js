import React, { useEffect } from 'react';

import { useConfig } from '../../contexts/config.context';

import MainContentContainer from '../index';
import LogoName from '../../components/LogoName';
import JobTitle from '../../components/JobTitle';
import Profile from '../../components/Sections/Profile';
import Contact from '../../components/Sections/Contact';
import Skills from '../../components/Sections/Skills';
import Education from '../../components/Sections/Education';
import Awards from '../../components/Sections/Awards';
import Carrer from '../../components/Sections/Carrer';
import Courses from '../../components/Sections/Courses';

import {
  PresentationContainer
} from './styled';

export default function PortfolioPage() {
  const { setPageNumber, setPageName, getFieldData } = useConfig();

  useEffect(() => {
    if (getFieldData) {
      const data = getFieldData('portfolioPage');
      setPageName(data.pageName);
      setPageNumber(data.pageNumber);
    }
  }, [getFieldData, setPageName, setPageNumber]);

  return (
    <MainContentContainer>
      <PresentationContainer>
        <LogoName />
        <JobTitle />
      </PresentationContainer>
      <Profile />
      <Contact />
      <Skills />
      <Education />
      <Carrer />
      <Awards />
      <Courses />
    </MainContentContainer>
  );
}
