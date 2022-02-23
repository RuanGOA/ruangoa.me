import React from 'react';

import { useConfig } from '../contexts/config.context';

import LateralMenu from '../components/LateralMenu';
import Footer from '../components/Footer';

import {
  Page,
  Main
} from './styled';

export default function MainContentContainer(props) {
  const { theme } = useConfig();

  return (
    <Page>
      <LateralMenu /> 
      <Main theme={theme}>
        {props.children}
        <Footer />
      </Main>
    </Page>
  );
}
