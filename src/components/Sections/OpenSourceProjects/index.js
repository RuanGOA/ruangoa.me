import React, { useEffect, useState } from 'react';

import { useConfig } from '../../../contexts/config.context';

import { ProjectsSectionComponent, searchRepositories } from '../index';

import ProjectCard from '../ProjectCard';

export default function OpensourceProjects() {
  const [projects, setProjects] = useState([]);
  const { getFieldData } = useConfig();

  const data = getFieldData('opensourceProjects');

  useEffect(() => {
    searchRepositories(data['repos'], '@ruangoa/repositories-opensource', setProjects);
  }, []);

  return (
    <ProjectsSectionComponent title={data['title']}>
      {projects.map((repo, index) => <ProjectCard {...repo} key={index} />)}
    </ProjectsSectionComponent>
  );
}
