import React, { useEffect } from 'react';

import { useConfig } from '../../contexts/config.context';

import MainContentContainer from '../index';

import PersonalProjects from '../../components/Sections/PersonalProjects';
import OpenSourceProjects from '../../components/Sections/OpenSourceProjects';

export default function ProjectsPage() {
  const { setPageNumber, setPageName, getFieldData } = useConfig();

  useEffect(() => {
    if (getFieldData) {
      const data = getFieldData('projectsPage');
      setPageName(data.pageName);
      setPageNumber(data.pageNumber);
    }
  }, [getFieldData, setPageName, setPageNumber]);

  return (
    <MainContentContainer>
      <PersonalProjects />
      <OpenSourceProjects />
    </MainContentContainer>
  );
}
