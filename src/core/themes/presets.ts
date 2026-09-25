import type { ThemeConfig } from "./types";

export const themes = {
    /* ==================== GRAPHITE ==================== */

    dark: {
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
    },

    light: {
        family: "graphite",
        isDark: false,
        schema: {
            primary: "#111111",
            secondary: "#404040",

            background: "#FAFAFA",

            "muted-100": "#F5F5F5",
            "muted-200": "#E2E2E2",
            "muted-300": "#C7C7C7",
            "muted-400": "#A3A3A3",
            "muted-500": "#737373",
            "muted-600": "#525252",
            "muted-700": "#3A3A3A",
            "muted-800": "#292929",
            "muted-900": "#1C1C1C",

            "focus-outline": "#111111",
            "focus-outline-contrast": "#FAFAFA",
        },
    },

    /* ==================== SKY ==================== */

    sky_dark: {
        family: "sky",
        isDark: true,
        schema: {
            primary: "#38BDF8",
            secondary: "#67E8F9",

            background: "#07141D",

            "muted-100": "#0D202C",
            "muted-200": "#14303F",
            "muted-300": "#1E4558",
            "muted-400": "#316277",
            "muted-500": "#53869A",
            "muted-600": "#7FAABD",
            "muted-700": "#ACCAD8",
            "muted-800": "#D2E5EC",
            "muted-900": "#EDF7FA",

            "focus-outline": "#38BDF8",
            "focus-outline-contrast": "#07141D",
        },
    },

    sky_light: {
        family: "sky",
        isDark: false,
        schema: {
            primary: "#0369A1",
            secondary: "#0E7490",

            background: "#F2FAFD",

            "muted-100": "#E7F4F9",
            "muted-200": "#D2E5EC",
            "muted-300": "#ACCAD8",
            "muted-400": "#7FAABD",
            "muted-500": "#53869A",
            "muted-600": "#316277",
            "muted-700": "#1E4558",
            "muted-800": "#14303F",
            "muted-900": "#0D202C",

            "focus-outline": "#0284C7",
            "focus-outline-contrast": "#F2FAFD",
        },
    },

    /* ==================== FOREST ==================== */

    forest_dark: {
        family: "forest",
        isDark: true,
        schema: {
            primary: "#86EFAC",
            secondary: "#BEF264",

            background: "#0A150D",

            "muted-100": "#112218",
            "muted-200": "#1A3223",
            "muted-300": "#284831",
            "muted-400": "#3C6448",
            "muted-500": "#60856A",
            "muted-600": "#88A890",
            "muted-700": "#B1C8B5",
            "muted-800": "#D4E2D6",
            "muted-900": "#EDF4EE",

            "focus-outline": "#86EFAC",
            "focus-outline-contrast": "#0A150D",
        },
    },

    forest_light: {
        family: "forest",
        isDark: false,
        schema: {
            primary: "#15803D",
            secondary: "#4D7C0F",

            background: "#F5FAF5",

            "muted-100": "#EAF3EB",
            "muted-200": "#D4E2D6",
            "muted-300": "#B1C8B5",
            "muted-400": "#88A890",
            "muted-500": "#60856A",
            "muted-600": "#3C6448",
            "muted-700": "#284831",
            "muted-800": "#1A3223",
            "muted-900": "#112218",

            "focus-outline": "#15803D",
            "focus-outline-contrast": "#F5FAF5",
        },
    },

    /* ==================== MAGMA ==================== */

    magma_dark: {
        family: "magma",
        isDark: true,
        schema: {
            primary: "#FF7043",
            secondary: "#FBBF24",

            background: "#1A0D08",

            "muted-100": "#2A1710",
            "muted-200": "#3B2118",
            "muted-300": "#532F22",
            "muted-400": "#704537",
            "muted-500": "#95695B",
            "muted-600": "#B99184",
            "muted-700": "#D5B6AD",
            "muted-800": "#E9D6D0",
            "muted-900": "#F8EEEB",

            "focus-outline": "#FF7043",
            "focus-outline-contrast": "#1A0D08",
        },
    },

    magma_light: {
        family: "magma",
        isDark: false,
        schema: {
            primary: "#C2410C",
            secondary: "#A16207",

            background: "#FFF7F2",

            "muted-100": "#F9EDE8",
            "muted-200": "#E9D6D0",
            "muted-300": "#D5B6AD",
            "muted-400": "#B99184",
            "muted-500": "#95695B",
            "muted-600": "#704537",
            "muted-700": "#532F22",
            "muted-800": "#3B2118",
            "muted-900": "#2A1710",

            "focus-outline": "#C2410C",
            "focus-outline-contrast": "#FFF7F2",
        },
    },
} as const satisfies Record<string, ThemeConfig>;

export type ThemeName = keyof typeof themes;

export const themeNames = Object.keys(themes) as ThemeName[];