import { lazy } from "react";

// ========== LANDING PAGE =======================

export const LandingPage = lazy(() =>
    import("@/features/landing/pages/LandingPage")
);