import React, { useEffect } from 'react';

import { useConfig } from '../../contexts/config.context';

import MainContentContainer from '../index';

import PersonalProjects from '../../components/Sections/PersonalProjects';
import OpenSourceProjects from '../../components/Sections/OpenSourceProjects';

export default function ProjectsPage() {
  const { setPageNumber, setPageName } = useConfig();

  const data = {
    pageName: 'Projetos',
    pageNumber: 3
  };

  useEffect(() => {
    setPageName(data.pageName);
    setPageNumber(data.pageNumber);
  });

  return (
    <MainContentContainer>
      <PersonalProjects />
      <OpenSourceProjects />
    </MainContentContainer>
  );
}
