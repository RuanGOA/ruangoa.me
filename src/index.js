import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router';

import './styles/reset.css';
import './styles/main.css';
import './styles/constants.css';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
