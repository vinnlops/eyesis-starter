import type { RouteObject } from "react-router-dom";
import type { AppRoute } from "./types";

import {
    LandingPage
} from "./lazyComponents";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
    children: [],
  },
] satisfies AppRoute[];
