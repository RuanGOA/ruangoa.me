import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PresentationPage from './pages/PresentationPage/';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PresentationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
