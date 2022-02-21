import React from 'react';

import Section from '../index';

import { 
  Link,
  List,
  ItemList
} from '../styled';

export default function Contact() {
  const data = {
    'Github: ruangoa': 'https://github.com/ruangoa',
    'LinkedIn: ruangoa': 'https://www.linkedin.com/in/ruangoa',
    'Email: ruangoa0@gmail.com': 'mailto:ruangoa0@gmail.com',
    'Discord: RuanGOA#8663': '#'
  };

  return (
    <Section title="Contato">
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
    </Section>
  );
}
