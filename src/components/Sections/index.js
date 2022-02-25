import React from 'react';

import { github } from '../../services/github';

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
}

export function ProjectsSectionComponent(props) {
  return (
    <ProjectSection>
      <SectionName className="projects">{props.title}</SectionName>
      <ProjectsContainer>
        {props.children}
      </ProjectsContainer>
    </ProjectSection>
  )
}

export async function searchRepositories(data, storageName, setProjects) {
  const repositoriesString = localStorage.getItem(storageName);
  let repositories;
  if (!repositoriesString) {
    repositories = await github.searchRepos(data);
    localStorage.setItem(storageName, JSON.stringify(repositories));
  } else {
    repositories = JSON.parse(repositoriesString);
  }

  setProjects(repositories);  
}
