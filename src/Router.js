import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PresentationPage from './pages/PresentationPage/';
import PortfolioPage from './pages/PortfolioPage/';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PresentationPage />} />
        <Route exact path='/portfolio' element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
