import React from 'react';

import Section from '../index';

import {
  TagContainer,
  Tag
} from './styled';

export default function Skills() {
  const data = [
    'Python', 'JavaScript', 'HTML', 'CSS', 'SCRUM', 
    'Flask', 'React', 'Machine Learning', 'SQL', 
    'Git', 'Docker', 'OpenShift'
  ];

  return (
    <Section title="Experiência com">
      <TagContainer>
        {data.map((item) => (
          <Tag key={item}>{item}</Tag> 
        ))}
      </TagContainer>
    </Section>
  );
}
