import React from 'react';

import { useConfig } from '../../contexts/config.context';

import {
  Menu,
  ItemMenu
} from './styled';

export default function PageMenu() {
  const { pageNumber, getFieldData } = useConfig();

  const data = getFieldData('pagemenu');

  return (
    <Menu>
      {Object.entries(data).map(([key, data]) => {
        return (
          <ItemMenu
            className={pageNumber === data.number ? 'active' : ''}
            key={key}
            to={data.path}
          >
            {key}
          </ItemMenu>
        )
      })}
    </Menu>
  );
}
