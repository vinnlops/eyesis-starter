import type { RouteObject } from "react-router-dom";
import type { AppRoute } from "./types";

import {
    LandingPage
} from "./lazyComponents";

// ========== ROUTES =====================

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
    children: [],
  },
] satisfies AppRoute[];
