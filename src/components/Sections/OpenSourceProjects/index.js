import React, { useEffect, useState } from 'react';

import { github } from '../../../services/github';

import { ProjectsSectionComponent } from '../index';

import ProjectCard from '../ProjectCard';

export default function OpensourceProjects() {
  const [projects, setProjects] = useState([]); 

  const data = [
    'andromedev',
    'front-hoco'
  ];

  useEffect(() => {
    async function searchRepositories() {
      const repositoriesString = localStorage.getItem('@ruangoa/repositories-opensource');
      let repositories;
      if (!repositoriesString) {
        repositories = await github.searchRepos(data);
        localStorage.setItem('@ruangoa/repositories-opensource', JSON.stringify(repositories));
      } else {
        repositories = JSON.parse(repositoriesString);
      }

      console.log(repositories);

      setProjects(repositories);  
    }

    searchRepositories();
  }, []);

  return (
    <ProjectsSectionComponent title="Participação em projetos OpenSource">
      {projects.map((repo, index) => <ProjectCard {...repo} key={index} />)}
    </ProjectsSectionComponent>
  );
}
