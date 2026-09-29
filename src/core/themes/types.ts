import type { tokenSchema } from "./tokens";

// ==================== TOKENS =======================

export type TokenSchema =
    {
        section: string
        description: string,
        tokens: string[],
        behavior?:
        | "interpolate"
    }[]

export type TokenKey = (typeof tokenSchema)[number]["tokens"][number];

export type ThemeTokens = Record<TokenKey, string>;

// ==================== THEMES =======================

export type ThemeMode =
    | "light"
    | "dark"

export type ThemeFamily =
    | "graphite"
    | "sky"
    | "forest"
    | "magma"

export type ThemeConfig = {
    family: ThemeFamily;
    schema: ThemeTokens;
    isDark: boolean;
}