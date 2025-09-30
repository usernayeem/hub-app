import { createBrowserRouter } from "react-router";

import React from "react";
import { Root } from "./Root";
import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import { About } from "./About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
