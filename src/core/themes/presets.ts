import type { ThemeConfig } from "./types";

export const themes = {
    dark: {
        family: "default",
        isDark: true,
        schema: {
            primary: "#181818",
            secondary: "#fff",

            background: "#181818",

            "muted-100": "#323232",
            "muted-200": "#3d3d3d",
            "muted-300": "#4f4f4f",
            "muted-400": "#666666",
            "muted-500": "#858585",
            "muted-600": "#a3a3a3",
            "muted-700": "#c2c2c2",
            "muted-800": "#e0e0e0",
            "muted-900": "#f5f5f5",

            "focus-outline": "#fff",
            "focus-outline-contrast": "#181818",
        },
    },

    light: {
        family: "default",
        isDark: false,
        schema: {
            primary: "#fff",
            secondary: "#181818",

            background: "#fff",

            "muted-900": "#f5f5f5",
            "muted-800": "#e0e0e0",
            "muted-700": "#c2c2c2",
            "muted-600": "#a3a3a3",
            "muted-500": "#858585",
            "muted-400": "#666666",
            "muted-300": "#4f4f4f",
            "muted-200": "#3d3d3d",
            "muted-100": "#323232",

            "focus-outline": "#181818",
            "focus-outline-contrast": "#fff",
        },
    },
} as const satisfies Record<string, ThemeConfig>;


export type ThemeName = keyof typeof themes;

export const themeNames = Object.keys(themes) as ThemeName[];