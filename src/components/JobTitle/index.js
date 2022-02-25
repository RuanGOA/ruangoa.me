import React from 'react';

import { useConfig } from '../../contexts/config.context';

import {
  Title
} from './styled';

export default function JobTitle({ isPresentationPage }) {
  const { theme, getFieldData } = useConfig();
  const spacing = isPresentationPage ? '0.1' : '0.5';

  const data = getFieldData('jobtitle');

  return (
    <Title spacing={spacing} theme={theme}>
      {data}
    </Title>
  );
}
