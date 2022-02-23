import React from 'react';

import { SectionComponent } from '../index';

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
    <SectionComponent title="Experiência com">
      <TagContainer>
        {data.map((item) => (
          <Tag key={item}>{item}</Tag> 
        ))}
      </TagContainer>
    </SectionComponent>
  );
}
