import type { tokenSchema } from "./tokens";

// ==================== TOKENS =======================

export type TokenKey = (typeof tokenSchema)[number];

export type ThemeTokens = Record<TokenKey, string>;

// ==================== THEMES =======================

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