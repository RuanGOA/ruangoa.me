import React from 'react';

import { SectionComponent } from '../index';

import { useConfig } from '../../../contexts/config.context';

import {
  Link,
  List,
  ItemList
} from '../styled';

export default function Contact() {
  const { theme, getFieldData } = useConfig();

  const data = getFieldData('contact');

  return (
    <SectionComponent title={data['title']}>
      <List>
        {Object.entries(data['urls']).map(([key, url]) => (
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
