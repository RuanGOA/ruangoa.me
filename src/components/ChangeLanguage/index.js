import React from 'react';

import { useConfig } from '../../contexts/config.context';

import {
  LanguageContainer,
  LanguageItem
} from './styled';


export default function ChangeLanguage() {
  const { language, setLanguage } = useConfig();

  const data = [ 'PT', 'EN' ];

  return (
    <LanguageContainer>
      {data.map((item) => (
        <LanguageItem 
          onClick={() => setLanguage(item)}
          className={language === item ? 'active' : ''}
        >
          {item}
        </LanguageItem>
      ))}
    </LanguageContainer>
  );
}
