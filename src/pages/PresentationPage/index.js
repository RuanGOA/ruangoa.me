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
  const data = getFieldData('presentationPage');

  useEffect(() => {
    if (getBackgroundPath) {
      setBackgroundPath(getBackgroundPath());
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setPageName(data.pageName);
      setPageNumber(data.pageNumber);
    }
  }, [data, getFieldData, setPageName, setPageNumber]);

  useEffect(() => {
    if (data && backgroundPath && theme && getFieldData && isLoading) {
      setIsLoading(false);
    } 
  }, [data, backgroundPath, theme, getFieldData, isLoading, setIsLoading]);

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
