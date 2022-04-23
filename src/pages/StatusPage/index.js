import React, { useEffect } from 'react';

import { useConfig } from '../../contexts/config.context';

import StatusCard from '../../components/StatusCard/';

import MainContentContainer from '../index';

import { StatusPageContainer } from './styled';

export default function StatusPage(props) {
  const { setPageNumber, setPageName, getFieldData } = useConfig();

  useEffect(() => {
    if (getFieldData) {
      const data = getFieldData(props.name);
      setPageName(data.pageName);
      setPageNumber(data.pageNumber);
    }
  }, [getFieldData, setPageName, setPageNumber, props]);

  return (
    <MainContentContainer>
      <StatusPageContainer>
        <StatusCard {...props} />
      </StatusPageContainer>
    </MainContentContainer>
  );
}
