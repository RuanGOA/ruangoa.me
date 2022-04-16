import React from 'react';

import { useConfig } from '../../contexts/config.context';

import { Divisor } from './styled';

export default function Divide() {
  const { theme } = useConfig();

  return (
    <Divisor theme={theme} />
  );
}
