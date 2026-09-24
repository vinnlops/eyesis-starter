import type { tokenSchema } from "./tokens";

// ==================== TOKENS =======================

export type TokenKey = (typeof tokenSchema)[number];

export type ThemeTokens = Record<TokenKey, string>;

// ==================== THEMES =======================

export type ThemeFamily =
    | "default"
    | "blue"
    | "steel"

export type ThemeConfig = {
    family: ThemeFamily;
    schema: ThemeTokens;
    isDark: boolean;
}