import React from 'react';

import Presentation from '../../components/Presentation';

import { getBackgroundPath } from '../../utils/getBackgroundPath';

import {
  Page,
  Card,
  PortfolioButton 
} from './styled';

export default function PresentationPage() {
  const backgroundPath = getBackgroundPath();

  return (
    <Page backgroundPath={backgroundPath}> 
      <Card>
        <Presentation />
      </Card>
      <PortfolioButton>
        Portfolio
      </PortfolioButton>
    </Page>
  );
}
