import React from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { HubGPT } from "./HubGPT";
import { ScrollToTop } from "./ScrollToTop";

export const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <HubGPT />
    </>
  );
};
