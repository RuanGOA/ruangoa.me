import React, { useEffect, useState } from 'react';

import { useConfig } from '../../contexts/config.context';

import Presentation from '../../components/Presentation';
import PortfolioButton from '../../components/PortfolioButton';
import { ReactComponent as LoadingIcon } from '../../assets/loading.svg';

import { getBackgroundPath } from '../../utils/getBackgroundPath';

import {
  PageCentralizer,
  PageWithBackground,
  Card
} from './styled';

export default function PresentationPage() {
  const { setPageNumber, setPageName, theme, getFieldData } = useConfig();
  const [isLoading, setIsLoading] = useState(true);
  const [backgroundPath, setBackgroundPath] = useState();

  useEffect(() => {
    if (getBackgroundPath) {
      setBackgroundPath(getBackgroundPath());
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (getFieldData) {
      const data = getFieldData('presentationPage');
      setPageName(data.pageName);
      setPageNumber(data.pageNumber);
    }
  }, [getFieldData, setPageName, setPageNumber]);

  return (
    <>
      {isLoading ? (
        <PageCentralizer>
          <LoadingIcon />
        </PageCentralizer>
      ) : (
        <PageWithBackground backgroundPath={backgroundPath}>
          <Card theme={theme}>
            <Presentation isPresentationPage={true} />
          </Card>
          <PortfolioButton />
        </PageWithBackground>
      )}
    </>
  );
}
