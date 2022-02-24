import React from 'react';

import { useConfig } from '../../contexts/config.context';

import {
  Menu,
  ItemMenu
} from './styled';

export default function PageMenu() {
  const { pageNumber } = useConfig();

  const data = {
    'Apresentação': { path: '/', number: 1 },
    'Portfólio': { path: '/portfolio', number: 2 },
    'Projetos': { path: '/projects', number: 3 }
  };

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
