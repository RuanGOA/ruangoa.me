import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ResumePage from "./pages/Resume";

import NotFoundPage from "./pages/StatusPage/NotFoundPage/";
import NoContentPage from "./pages/StatusPage/NoContentPage/";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/resume" element={<ResumePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/204" element={<NoContentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
