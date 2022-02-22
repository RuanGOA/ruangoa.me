import React from 'react';

import { useConfig } from '../../contexts/config.context';

import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';

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
      {(theme === 'light') ? <Moon /> : <Sun />}
    </ThemeButton>
  );
}
