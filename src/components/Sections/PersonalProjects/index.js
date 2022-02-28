import React, { useEffect, useState } from 'react';

import { useConfig } from '../../../contexts/config.context';

import { ReactComponent as LoadingIcon } from '../../../assets/loading.svg';

import { ProjectsSectionComponent, searchRepositories } from '../index';

import { LoadingContainer } from '../styled';

import ProjectCard from '../ProjectCard';

export default function PersonalProjects() {
  const { getFieldData } = useConfig();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const data = getFieldData('personalProjects');

  useEffect(() => {
    searchRepositories(data['repos'], '@ruangoa/repositories', setProjects);
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      setIsLoading(false);
    }
  }, [projects]);

  return (
    <ProjectsSectionComponent title={data['title']}>
      {isLoading ? 
        (<LoadingContainer><LoadingIcon /></ LoadingContainer>) :
        (projects.map((repo, index) => <ProjectCard {...repo} key={index} />))}
    </ProjectsSectionComponent>
  );
}
