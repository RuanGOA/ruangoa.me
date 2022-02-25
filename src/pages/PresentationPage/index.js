import React, { useEffect } from 'react';

import { useConfig } from '../../contexts/config.context';

import Presentation from '../../components/Presentation';
import PortfolioButton from '../../components/PortfolioButton';

import { getBackgroundPath } from '../../utils/getBackgroundPath';

import {
  PageWithBackground,
  Card
} from './styled';

export default function PresentationPage() {
  const backgroundPath = getBackgroundPath();
  const { setPageNumber, setPageName, theme, getFieldData } = useConfig();

  useEffect(() => {
    if (getFieldData) {
      const data = getFieldData('presentationPage');
      setPageName(data.pageName);
      setPageNumber(data.pageNumber);
    }
  }, [getFieldData, setPageName, setPageNumber]);

  return (
    <PageWithBackground backgroundPath={backgroundPath}>
      <Card theme={theme}>
        <Presentation isPresentationPage={true} />
      </Card>
      <PortfolioButton />
    </PageWithBackground>
  );
}
