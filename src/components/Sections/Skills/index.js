import React from 'react';

import Section from '../index';

import { 
  Text,
  List,
  ItemList
} from '../styled';

export default function Skills() {
  const data = {
    'Linguagem de Programação': ['Python', 'JavaScript'],
    'Tecnologias': ['HTML', 'CSS', 'Flask', 'React', 'Machine Learning', 'SQL', 'Git', 'Docker', 'OpenShift']
  };

  return (
    <Section title="Habilidades">
      <List>
      {Object.entries(data).map(([key, items]) => (
          <ItemList key={key}>
            <Text className="bold">{key}</Text>
            <Text>{items.join('; ')}</Text>
          </ItemList>
      ))}
      </List>
    </Section>
  );
}
