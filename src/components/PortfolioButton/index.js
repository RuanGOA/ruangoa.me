import React, { useEffect } from 'react';

import { useConfig } from '../../contexts/config.context';

import { useNavigate } from 'react-router-dom';

import {
  PortfolioButton
} from './styled';

export default function PresentationButton() {
  const navigate = useNavigate();
  const { getFieldData } = useConfig();

  const data = getFieldData('portfoliobutton');

  return (
    <PortfolioButton onClick={() => navigate('/portfolio')}>
      {data}
    </PortfolioButton>
  );
}
