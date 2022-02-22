import React from 'react';

import { useConfig } from '../../contexts/config.context';

import { ReactComponent as LightButton } from '../../assets/lightButton.svg';
import { ReactComponent as DarkButton } from '../../assets/darkButton.svg';

import {
  ThemeButton
} from './styled';


export default function ChangeTheme() {
  const { theme, setTheme } = useConfig();

  const handleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  }

  return (
    <ThemeButton onClick={handleTheme}> 
      {(theme === 'light') ? <LightButton /> : <DarkButton />}
    </ThemeButton>
  );
}
