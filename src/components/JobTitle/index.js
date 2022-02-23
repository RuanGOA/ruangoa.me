import React from 'react';

import { useConfig } from '../../contexts/config.context';

import { 
  Title
} from './styled';

export default function JobTitle({ isPresentationPage }) {
  const { theme } = useConfig();
  const spacing = isPresentationPage ? '0.1' : '0.5';

  return (
    <Title spacing={spacing} theme={theme}>
      Software developer
    </Title>
  );
}
