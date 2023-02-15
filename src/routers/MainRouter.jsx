import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("../pages/MainPage"));
const DetailPage = lazy(() => import("../pages/DetailPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const AboutMemberCompont = lazy(() =>
  import("../components/AboutMemberCompont")
);
const AboutLocationCompont = lazy(() =>
  import("../components/AboutLocationCompont")
);

const MaingRouter = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/about" element={<AboutPage />}>
            <Route path="member" element={<AboutMemberCompont />} />
            <Route path="location" element={<AboutLocationCompont />} />
          </Route>

          <Route path="*" element={<div>404 PAGE</div>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MaingRouter;
