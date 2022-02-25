import React from 'react';

import { SectionComponent } from '../index';

import { useConfig } from '../../../contexts/config.context';

import {
  Text,
  List,
  ItemList
} from '../styled';

export default function Carrer() {
  const { getFieldData } = useConfig();

  const data = getFieldData('carrer');

  return (
    <SectionComponent title={data['title']}>
      <List>
        {Object.entries(data['jobs']).map(([key, items]) => (
          <ItemList key={key}>
            <Text className="bold">{key}</Text>
            {items.map((item) => (
              <Text>{item}</Text>
            ))}
          </ItemList>
        ))}
      </List>
    </SectionComponent>
  );
}
