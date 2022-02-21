import React from 'react';

import LogoName from '../../components/LogoName';
import JobTitle from '../../components/JobTitle';
import Profile from '../../components/Sections/Profile';
import Skills from '../../components/Sections/Skills';
import Education from '../../components/Sections/Education';
import Awards from '../../components/Sections/Awards';
import Carrer from '../../components/Sections/Carrer';
import Courses from '../../components/Sections/Courses';
import Footer from '../../components/Footer';

import {
  Page,
  Lateral,
  PresentationContainer,
  Main
} from './styled';

export default function PortfolioPage() {
  return (
    <Page> 
      <Lateral> 
      </Lateral>
      <Main>
        <PresentationContainer>
          <LogoName />
          <JobTitle />
        </PresentationContainer>
        <Profile />
        <Skills />
        <Education />
        <Carrer />
        <Awards />
        <Courses />
        <Footer />
      </Main>
    </Page>
  );
}
