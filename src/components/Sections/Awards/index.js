import React from 'react';

import { SectionComponent } from '../index';

import { 
  Link,
  List,
  ItemList
} from '../styled';

export default function Awards() {
  const data = {
    'Medalha de Prata - Olimpíada Paraibana de Informática [OPI] (2019)': '#',
    'Menção Honrosa - Olimpíada Brasileira de Astronomia [OBA] (2016)': '#',
    'Menção Honrosa - Olimpíada Brasileira de Matemática das Escolas Públicas [OBMEP] (2016)': 'https://drive.google.com/file/d/195_9XVkCFIVmHqiaUtqyywob1jHBwsPg/view?usp=sharing',
    'Menção Honrosa - Olimpíada Brasileira de Matemática das Escolas Públicas [OBMEP] (2014)': 'https://drive.google.com/file/d/11GPkPepdHDYVzXfYoXsPyAf9rttfJLL0/view?usp=sharing'
  };

  return (
    <SectionComponent title="Prêmios">
      <List>
      {Object.entries(data).map(([key, url]) => (
        <ItemList key={key} className="dotted">
          <Link
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {key}
          </Link>
        </ItemList>
      ))}
      </List>
    </SectionComponent>
  );
}
