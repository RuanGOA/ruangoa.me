import React from 'react';

import { SectionComponent } from '../index';

import { useConfig } from '../../../contexts/config.context';

import { 
  Link,
  List,
  ItemList
} from '../styled';

export default function Contact() {
  const { theme } = useConfig();

  const data = {
    'Github: ruangoa': 'https://github.com/ruangoa',
    'LinkedIn: ruangoa': 'https://www.linkedin.com/in/ruangoa',
    'Email: ruangoa0@gmail.com': 'mailto:ruangoa0@gmail.com',
    'Discord: RuanGOA#8663': '#'
  };

  return (
    <SectionComponent title="Contato">
      <List>
      {Object.entries(data).map(([key, url]) => (
        <ItemList 
          key={key} 
          className="dotted"
          theme={theme}
        >
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
