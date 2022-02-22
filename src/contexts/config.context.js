import {
  useContext,
  createContext,
  useEffect,
  useState
} from 'react';

export const ConfigContext = createContext({});

export function ConfigProvider(props) {
  const [pageNumber, setPageNumber] = useState(0);
  const [pageName, setPageName] = useState('');
  const [language, setLanguage] = useState('PT');
  const [theme, setTheme] = useState('');

  const contextValue = {
    pageNumber, setPageNumber,
    language, setLanguage,
    pageName, setPageName,
    theme, setTheme
  }

  useEffect(() => {
    const themeStorage = localStorage.getItem('@ruangoa/theme');

		setTheme(themeStorage || 'dark');
  }, []);

  useEffect(() => {
		document.title = `@ruangoa - ${pageName}`;
		window.scrollTo(0, 0);
	}, [pageName]);

  useEffect(() => {
		localStorage.setItem('@ruangoa/theme', theme);
	}, [theme]);

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
