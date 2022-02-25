import {
  useContext,
  createContext,
  useEffect,
  useState
} from 'react';

import { data } from '../data/index';

export const ConfigContext = createContext({});

export function ConfigProvider(props) {
  const [pageNumber, setPageNumber] = useState(0);
  const [pageName, setPageName] = useState('');
  const [language, setLanguage] = useState('EN');
  const [theme, setTheme] = useState('dark');

  const getFieldData = (field) => {
    return data[language][field];
  };

  useEffect(() => {
    console.log(data);
  }, [data])

  const contextValue = {
    pageNumber, setPageNumber,
    language, setLanguage,
    pageName, setPageName,
    theme, setTheme,
    getFieldData
  };

  useEffect(() => {
    document.title = `@ruangoa - ${pageName}`;
    window.scrollTo(0, 0);
  }, [pageName]);

  return (
    <ConfigContext.Provider value={contextValue}>
      {props.children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);

  return { ...context };
};
