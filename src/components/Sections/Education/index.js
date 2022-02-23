import React from 'react';

import { SectionComponent } from '../index';

import { 
  Text,
  List,
  ItemList
} from '../styled';

export default function Education() {
  const data = {
    'Universidade Federal de Campina Grande [UFCG]': ['2018 - Atualmente', 'Bacharelado em Ciência da computação.'],
    'Instituto Federal de Pernambuco [IFPE]': ['2014 - 2016', 'Grau técnico em informática para internet integrado com o ensino médio.']
  };

  return (
    <SectionComponent title="Educação">
      <List>
      {Object.entries(data).map(([key, items]) => (
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
