import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("../pages/MainPage"));

const MaingRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MaingRouter;
