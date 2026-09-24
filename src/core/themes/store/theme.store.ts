import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { ThemeStore } from "./theme.types";

import { defaultTheme, resolveTheme } from "../theme.runtime";
import { applyTheme } from "../theme.runtime";
import { themeNames, themes } from "../presets";

function readPersistedTheme(value: unknown): unknown {
    const isValid =
        typeof value === "object" &&
        value != null &&
        "theme" in value

    if (isValid)
        return value.theme;

    return undefined
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
            theme: defaultTheme,

            // Muda o tema para outro
            setTheme(value) {
                const theme = resolveTheme(value);

                applyTheme(theme);
                set({
                    theme,
                });
            },

            // Muda de tema mantendo escuro/claro
            setThemeFamily(family) {
                const currentTheme = themes[get().theme];

                const nextTheme = themeNames.find((name) => {
                    const candidate = themes[name];

                    return (
                        candidate.family === family &&
                        candidate.isDark === currentTheme.isDark
                    );
                });

                if (nextTheme) {
                    get().setTheme(nextTheme);
                }
            },

            // Alterna entre claro e escuro mantendo familia
            toggleTheme() {
                const current = themes[get().theme];

                const nextTheme = themeNames.find((name) => {
                    const candidate = themes[name];

                    return (
                        candidate.family === current.family &&
                        candidate.isDark !== current.isDark
                    );
                });

                if (nextTheme) {
                    get().setTheme(nextTheme);
                }
            },
        }),
        {
            name: "theme-store",

            partialize: (state) => ({
                theme: state.theme
            }),

            merge: (persistedState, currentState) => ({
                ...currentState,
                theme: resolveTheme(
                    readPersistedTheme(persistedState)
                ),
            }),

            onRehydrateStorage: () => (state) => {
                if (state) {
                    applyTheme(state.theme);
                }
            },
        }
    )
);