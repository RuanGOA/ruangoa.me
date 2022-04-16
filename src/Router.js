import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PresentationPage from './pages/PresentationPage/';
import PortfolioPage from './pages/PortfolioPage/';
import ProjectsPage from './pages/ProjectsPage/';
import BlogPage from './pages/BlogPage/';
import PostPage from './pages/PostPage/';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PresentationPage />} />
        <Route exact path='/portfolio' element={<PortfolioPage />} />
        <Route exact path='/projects' element={<ProjectsPage />} />
        <Route exact path='/blog' element={<BlogPage />} />
        <Route path='/blog/:postId' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
