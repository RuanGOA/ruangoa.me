import React from 'react';

import { useNavigate } from 'react-router-dom';

import ChangeTheme from '../ChangeTheme';
import ChangeLanguage from '../ChangeLanguage';
import PageMenu from '../PageMenu';
import SocialButtons from '../SocialButtons';

import { ReactComponent as PortfolioIcon } from '../../assets/icon.svg';

import {
  Aside,
  AsideMain,
  AsideUtils,
  AsideFooter
} from './styled';

export default function LateralMenu() {
  const navigate = useNavigate();

  return (
    <Aside>
      <AsideMain>
        <PortfolioIcon onClick={() => navigate('/portfolio')} />
        <PageMenu />
      </AsideMain>
      <AsideUtils>
        <ChangeLanguage />
        <ChangeTheme />
      </AsideUtils>
      <AsideFooter>
        <SocialButtons isLateralMenu={true} />
      </AsideFooter>
    </Aside>
  );
}
