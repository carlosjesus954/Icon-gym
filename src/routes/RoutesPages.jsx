import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppHome } from "../pages/AppHome";
import { NavBar } from "../ui/components/NavBar";
import { Footer } from "../ui/components/Footer";

export const RoutesPages = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AppHome />} />
        {/* <Route path="/" element={<AppHome />} />
        <Route path="/" element={<AppHome />} /> */}
      </Routes>
      <Footer />
    </>
  );
};
