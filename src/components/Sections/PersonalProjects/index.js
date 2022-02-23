import React, { useEffect, useState } from 'react';

import { github } from '../../../services/github';

import { ProjectsSectionComponent } from '../index';

import ProjectCard from '../ProjectCard';

export default function PersonalProjects() {
  const [projects, setProjects] = useState([]); 

  const data = [
    'vim-trainer',
    'move.it',
    'letmeask',
    'dockerized-flask-api',
    'tiringa-vs-werewolf',
    'competitive',
    'corretor-ortografico',
  ];

  useEffect(() => {
    async function searchRepositories() {
      const repositoriesString = localStorage.getItem('@ruangoa/repositories');
      let repositories;
      if (!repositoriesString) {
        repositories = await github.searchRepos(data);
        localStorage.setItem('@ruangoa/repositories', JSON.stringify(repositories));
      } else {
        repositories = JSON.parse(repositoriesString);
      }

      setProjects(repositories);  
    }

    searchRepositories();
  }, []);

  return (
    <ProjectsSectionComponent title="Projetos Pessoais">
      {projects.map((repo, index) => <ProjectCard {...repo} key={index} />)}
    </ProjectsSectionComponent>
  );
}
