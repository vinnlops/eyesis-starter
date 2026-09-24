import { themeNames, themes, type ThemeName } from "./presets";
import { themeTokenKeys } from "./tokens";

// ==================== METHODS ============================

// Obter tema do sistema
export const getSystemTheme = (): ThemeName => {
    if (typeof window !== "undefined" && window.matchMedia) {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return isDark ? "dark" : "light";
    }
    return themeNames[0];
};

// Resolve key do tema para validar entrada
export function resolveTheme(value: unknown): ThemeName {
    if (typeof value === "string" && Object.prototype.hasOwnProperty.call(themes, value))
        return value as ThemeName;

    return defaultTheme;
}

// Aplica as propriedades no elemento HTML root
export function applyTheme(value: ThemeName): void {
    const theme = resolveTheme(value);
    const config = themes[theme] ?? themes[defaultTheme];
    const root = document.documentElement;

    root.dataset.theme = theme;

    for (const key of themeTokenKeys) {
        root.style.setProperty(
            `--color-${key}`,
            config.schema[key]
        );
    }
}

export function setFavicon(newFaviconUrl: string, size = "32x32") {
    const faviconElement: HTMLLinkElement = document.getElementById("dynamic-favicon") as HTMLLinkElement;
    if (faviconElement) {
        faviconElement.href = newFaviconUrl;
        faviconElement.sizes = size;
    } else {
        console.error("Favicon element not found. Ensure the link tag has id='dynamic-favicon'.");
    }
}

export function updateFavicon(): void {
    const faviconUrl = getSystemTheme() === "dark"
        ? "/favicon_dark.svg"
        : "/favicon_light.svg";

    setFavicon(faviconUrl);
}

export const defaultTheme: ThemeName = getSystemTheme();