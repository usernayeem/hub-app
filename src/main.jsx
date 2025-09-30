import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./components/Routes";
import { DownloadProvider } from "./context/downloadContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DownloadProvider>
      <RouterProvider router={router} />
    </DownloadProvider>
  </StrictMode>
);
