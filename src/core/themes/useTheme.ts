import { themeNames, themes, type ThemeName } from "./presets";
import { applyTheme, defaultTheme, updateFavicon } from "./theme.runtime";
import { useThemeStore } from "./store/theme.store";

// ==================== INTERNAL METHODS ====================

// Atualiza tema dinamicamente sincronizado ao store
function subscribeThemeStorage(): () => void {
    if (typeof window === "undefined")
        return () => { };

    function handleStorage(event: StorageEvent) {
        if (event.storageArea !== window.localStorage)
            return

        const storageKey = useThemeStore.persist.getOptions().name;

        if (event.key !== storageKey && event.key !== null)
            return;

        void useThemeStore.persist.rehydrate();
    }

    window.addEventListener("storage", handleStorage);

    return () => {
        window.removeEventListener("storage", handleStorage);
    }
}

// ==================== METHODS ============================

// Inicializa temas (chamar no main)
export function initTheme(): () => void {
    const unsubscribe = subscribeThemeStorage();

    void useThemeStore.persist.rehydrate();

    applyTheme(getTheme());
    updateFavicon();

    return unsubscribe;
}

// Obtem tema atual
export function getTheme(): ThemeName {
    const storedTheme = useThemeStore.getState().theme;
    const activeTheme = storedTheme ?? defaultTheme;

    return activeTheme;
}
// ==================== HOOKS ============================

// Retorna o tema atual
export function useTheme() {
    return useThemeStore((state) => state.theme)
}

// Alterna o tema atual (escuro/claro)
export function toggleTheme() {
    useThemeStore.getState().toggleTheme();
}

// Retorna se o tema atual é escuro/dark
export function useIsDarkTheme() {
    return useThemeStore((state) => themes[state.theme].isDark);
}

// Altera manualmente o tema atual
export function changeTheme(theme: ThemeName): void {
    useThemeStore.getState().setTheme(theme);
}

// Obtem familia de themas de acordo com o estado atual (escuro/claro)
export function getThemeFamilies(isDark: boolean) {
    return themeNames
        .filter((name) => themes[name].isDark === isDark)
        .map((name) => ({
            name,
            family: themes[name].family,
            theme: themes[name],
        }))
}