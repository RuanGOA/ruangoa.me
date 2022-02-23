import React from 'react';

import { SectionComponent } from '../index';

import {
  Text
} from '../styled';

export default function Profile() {
  const data = [ 
    'Sou estudante de Ciência da Computação na Universidade Federal de Campina Grande, com previsão de término em meados de 2023. Atualmente estou aprendendo principalmente desenvolvimento web, ferramentas devops e aprendizado de máquina.',
    'Atualmente estou trabalhando no projeto ePol, uma parceria entre o SPLab (Laboratório de Práticas de Software) e a Polícia Federal do Brasil.',
    'Projetos Open Source me interessam muito, e estou sempre procurando alguns deles no Github, se você acha que minha ajuda será boa para algum desses, me avise!']

  return (
    <SectionComponent title="Perfil">
      {data.map((text) => (
        <Text>
          {text}
        </Text>
      ))}
    </SectionComponent>
  );
}
