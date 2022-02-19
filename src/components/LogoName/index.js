import React from 'react';

import { ReactComponent as PortfolioIcon } from '../../assets/icon.svg';

import { Name, Logo } from './styled';

export default function PageIcon() {
  return (
    <Logo>
      <PortfolioIcon />
      <Name>Ruan Gomes</Name>
    </Logo>
  )
}


