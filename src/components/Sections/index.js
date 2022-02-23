import React from 'react';

import { useConfig } from '../../contexts/config.context';

import {
  Section,
  SectionName,
  ProjectSection,
  ProjectsContainer
} from './styled';

export function SectionComponent(props) {
  const { theme } = useConfig();

  return (
    <Section theme={theme}> 
      <SectionName>
        {props.title}
      </SectionName>
      {props.children}
    </Section>
  );
};

export function ProjectsSectionComponent(props) {
  return (
    <ProjectSection>
      <SectionName className="projects">{props.title}</SectionName>
      <ProjectsContainer>
        {props.children}
      </ProjectsContainer>
    </ProjectSection>
  )
};
