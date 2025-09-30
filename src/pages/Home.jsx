import React from "react";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "../components/SEOHead";

export const Home = () => {
  return (
    <div>
      <HelmetProvider>
        <SEOHead />
        <Hero />
        <Features />
      </HelmetProvider>
    </div>
  );
};
