import React, { useEffect, useState } from 'react';

import { useConfig } from '../../../contexts/config.context';

import { ProjectsSectionComponent, searchRepositories } from '../index';

import ProjectCard from '../ProjectCard';

export default function PersonalProjects() {
  const { getFieldData } = useConfig();

  const [projects, setProjects] = useState([]);

  const data = getFieldData('personalProjects');

  useEffect(() => {
    searchRepositories(data['repos'], '@ruangoa/repositories', setProjects);
  }, []);

  return (
    <ProjectsSectionComponent title={data['title']}>
      {projects.map((repo, index) => <ProjectCard {...repo} key={index} />)}
    </ProjectsSectionComponent>
  );
}
