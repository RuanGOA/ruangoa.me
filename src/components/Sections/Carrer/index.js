import React from 'react';

import { SectionComponent } from '../index';

import { 
  Text,
  List,
  ItemList
} from '../styled';

export default function Carrer() {
  const data = {
    'ePol - Software Practices Laboratory [SPLab]': ['Desenvolvedor e Pesquisador', 'Março/2020 - Atualmente', 'Realizei pesquisas de modelos de Machine Learning utilizando Python; Desenvolvi APIs REST em Flask (Python); Desenvolvi um protótipo frontend para integração com APIs desenvolvidas no projeto, utilizanndo React (JavaScript); Utilizei ferramentas de DevOps como Docker, OpenShift e Jenkins, realizando implantações em ambientes de produção e de homologação.']
  };

  return (
    <SectionComponent title="Carreira">
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
