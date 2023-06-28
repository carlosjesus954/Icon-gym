import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppHome } from "../pages/AppHome";
import { NavBar } from "../ui/components/NavBar";
import { Footer } from "../ui/components/Footer";
import { GoldenFest } from "../pages/GoldenFest";
import { ContactPage } from "../pages/ContactPage";

export const RoutesPages = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="golden" element={<GoldenFest />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};
