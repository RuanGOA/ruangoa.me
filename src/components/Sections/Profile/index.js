import React from 'react';

import Section from '../index';

import {
  Text
} from '../styled';

export default function Profile() {
  const text = `Sou estudante de computação, me interesso em
resolver problemas com programação, e também em
construir conhecimentos que me ajudem a superar
obtáculos futuros. Gosto muito de novos desafios e de
resolver problemas em time. Procuro oportunidades de
crescimento profissional e também de auxiliar o
crescimento da companhia em que trabalho, de forma a
criar uma relação mútua.`;

  return (
    <Section title="Perfil">
      <Text>{text}</Text>
    </Section>
  );
}
