import React from 'react';

import { useConfig } from '../../../contexts/config.context';

import { SectionComponent } from '../index';

import {
  Text
} from '../styled';

export default function Profile() {
  const { getFieldData } = useConfig();

  const data = getFieldData('profile');

  return (
    <SectionComponent title={data.title}>
      {data.text.map((text) => (
        <Text>
          {text}
        </Text>
      ))}
    </SectionComponent>
  );
}
