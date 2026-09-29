import type { ThemeConfig } from "../../types";

/* ==================== MAGMA DARK ==================== */

export const magmaDark = {
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
} as const satisfies ThemeConfig;