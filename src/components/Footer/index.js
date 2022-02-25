import React from 'react';

import { useConfig } from '../../contexts/config.context';

import {
  FooterContainer,
  Text
} from './styled';

export default function Footer() {
  const { getFieldData } = useConfig();

  const data = getFieldData('footer');

  return (
    <FooterContainer>
      <Text>
        {data}
      </Text>
    </FooterContainer>
  );
}
