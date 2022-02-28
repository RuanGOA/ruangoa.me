import React, { useState, useEffect } from 'react';

import { ReactComponent as RetractIcon } from './assets/retract.svg';

import PageMenu from '../../PageMenu';
import SocialButtons from '../../SocialButtons';
import ChangeTheme from '../../ChangeTheme';
import ChangeLanguage from '../../ChangeLanguage';

import { 
  TopMenuContainer,
  RetractContainer,
  RetractButton,
  MenuContainer,
  MenuUtils
} from './styled';

export default function TopMenu() {
  const [isRetracted, setIsRetracted] = useState(true);

  const handleRectract = () => {
    if (isRetracted) setIsRetracted(false);
    else setIsRetracted(true);
  };

  return (
    <TopMenuContainer retracted={isRetracted}>
      <RetractContainer>
        <RetractButton onClick={handleRectract}><RetractIcon /></RetractButton>
        <MenuUtils>
          <ChangeTheme />
          <ChangeLanguage />
        </ MenuUtils>
      </ RetractContainer>
      {(isRetracted) ? (
        <></>
      ) : (
        <MenuContainer retracted={isRetracted}>
          <PageMenu />
          <SocialButtons />
        </ MenuContainer>
      )}
  
    </TopMenuContainer>
  );
}
