import React from 'react';

import { SectionComponent } from '../index';

import { useConfig } from '../../../contexts/config.context';

import {
  Link,
  List,
  ItemList
} from '../styled';

export default function Awards() {
  const { getFieldData } = useConfig();

  const data = getFieldData('awards');

  return (
    <SectionComponent title={data['title']}>
      <List>
        {Object.entries(data['gains']).map(([key, url]) => (
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
