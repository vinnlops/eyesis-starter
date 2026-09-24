import { lazy } from "react";

export const LandingPage = lazy(() =>
    import("@/features/landing/pages/LandingPage")
);