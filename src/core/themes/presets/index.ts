import type { ThemeConfig } from "../types";
import { forestDark } from "./forest/dark";
import { forestLight } from "./forest/light";
import { graphiteDark } from "./graphite/dark";
import { graphiteLight } from "./graphite/light";
import { magmaDark } from "./magma/dark";
import { magmaLight } from "./magma/light";
import { skyDark } from "./sky/dark";
import { skyLight } from "./sky/light";

export const themes = {
    
    /* ==================== GRAPHITE ==================== */
    /*                     (default)                      */

    dark: graphiteDark,
    light: graphiteLight,

    /* ==================== SKY ==================== */

    sky_dark: skyDark,
    sky_light: skyLight,

    /* ==================== FOREST ==================== */

    forest_dark: forestDark,
    forest_light: forestLight,

    /* ==================== MAGMA ==================== */

    magma_dark: magmaDark,
    magma_light: magmaLight,

} as const satisfies Record<string, ThemeConfig>;

export type ThemeName = keyof typeof themes;

export const themeNames = Object.keys(themes) as ThemeName[];