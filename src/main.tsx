import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./core/styles";
import { router } from "./core/router";
import { initTheme } from "./core/themes";
import ReactLenis from "lenis/react";

initTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
  </StrictMode>,
);
