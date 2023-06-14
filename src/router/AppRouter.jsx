import { Route, Routes } from "react-router-dom";

import React from "react";
import { RoutesPages } from "../routes/RoutesPages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<RoutesPages />} />
      </Routes>
    </>
  );
};
