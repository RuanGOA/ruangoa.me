import React, { useEffect } from 'react';

import { useConfig } from '../../contexts/config.context';

import { useNavigate } from 'react-router-dom';

import Presentation from '../../components/Presentation';

import { getBackgroundPath } from '../../utils/getBackgroundPath';

import {
  PageWithBackground,
  Card,
  PortfolioButton 
} from './styled';

export default function PresentationPage() {
  const navigate = useNavigate();
  const backgroundPath = getBackgroundPath();
  const { setPageNumber, setPageName, theme } = useConfig();

  const data = {
    pageName: 'Apresentação',
    pageNumber: 1
  };

  useEffect(() => {
    setPageName(data.pageName);
    setPageNumber(data.pageNumber);
  });


  return (
    <PageWithBackground backgroundPath={backgroundPath}> 
      <Card theme={theme}>
        <Presentation isPresentationPage={true} />
      </Card>
      <PortfolioButton onClick={() => navigate('/portfolio')}>
        Portfolio
      </PortfolioButton>
    </PageWithBackground>
  );
}
