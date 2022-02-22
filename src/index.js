import React from 'react';
import ReactDOM from 'react-dom';

import { ConfigProvider } from './contexts/config.context';

import Router from './Router';

import './styles/reset.css';
import './styles/main.css';
import './styles/constants.css';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <Router />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
