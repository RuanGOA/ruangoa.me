import React from 'react';

import { SectionComponent } from '../index';

import { useConfig } from '../../../contexts/config.context';

import {
  TagContainer,
  Tag
} from './styled';

export default function Skills() {
  const { getFieldData } = useConfig();

  const data = getFieldData('skills');

  return (
    <SectionComponent title={data['title']}>
      <TagContainer>
        {
          data['tags'].map((item) => (
            <Tag key={item}>{item}</Tag>
          ))
        }
      </TagContainer >
    </SectionComponent >
  );
}
