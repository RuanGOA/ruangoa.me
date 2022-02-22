import React from 'react';

import { ReactComponent as PortfolioIcon } from '../../assets/icon.svg';

import { Name, Logo } from './styled';

export default function PageIcon({ isPresentationPage }) {
  const spacing = isPresentationPage ? '.1' : '.30';

  return (
    <Logo>
      {isPresentationPage && <PortfolioIcon />}
      <Name spacing={spacing}>Ruan Gomes</Name>
    </Logo>
  )
}


