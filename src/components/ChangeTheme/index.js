import React, { useState } from 'react';

import { ReactComponent as LightButton } from '../../assets/lightButton.svg';
import { ReactComponent as DarkButton } from '../../assets/darkButton.svg';

import {
  ThemeButton
} from './styled';


export default function ChangeTheme() {
  const [theme, setTheme] = useState('light');

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
