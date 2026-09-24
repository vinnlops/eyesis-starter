import type { ThemeName } from "../presets";
import type { ThemeFamily } from "../types";

export type ThemeStore = {
    theme: ThemeName;

    setTheme: (theme: ThemeName) => void;
    setThemeFamily: (Family: ThemeFamily) => void;
    toggleTheme: () => void;
};