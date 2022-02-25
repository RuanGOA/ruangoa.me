import React from 'react';

import { SectionComponent } from '../index';

import { useConfig } from '../../../contexts/config.context';

import {
  Text,
  List,
  ItemList
} from '../styled';

export default function Education() {
  const { getFieldData } = useConfig();

  const data = getFieldData('education');

  return (
    <SectionComponent title={data['title']}>
      <List>
        {Object.entries(data['locations']).map(([key, items]) => (
          <ItemList key={key}>
            <Text className="bold">{key}</Text>
            {items.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </ItemList>
        ))}
      </List>
    </SectionComponent>
  );
}
