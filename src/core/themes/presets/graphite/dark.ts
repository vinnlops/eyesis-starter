import type { ThemeConfig } from "../../types";

/* ==================== GRAPHITE DARK ==================== */

export const graphiteDark: ThemeConfig = {
    family: "graphite",
    isDark: true,
    schema: {
        primary: "#FFFFFF",
        secondary: "#CFCFCF",

        background: "#111111",

        "muted-100": "#1C1C1C",
        "muted-200": "#292929",
        "muted-300": "#3A3A3A",
        "muted-400": "#525252",
        "muted-500": "#737373",
        "muted-600": "#A3A3A3",
        "muted-700": "#C7C7C7",
        "muted-800": "#E2E2E2",
        "muted-900": "#F5F5F5",

        "focus-outline": "#FFFFFF",
        "focus-outline-contrast": "#111111",
    },
};