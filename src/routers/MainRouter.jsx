import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("../pages/MainPage"));
const DetailPage = lazy(() => import("../pages/DetailPage"));

const MaingRouter = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MaingRouter;
