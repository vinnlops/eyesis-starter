import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { ThemeStore } from "./theme.types";

import { defaultTheme, resolveTheme } from "../theme.runtime";
import { applyTheme } from "../theme.runtime";
import { themeNames, themes } from "../presets";
import { getThemeFamilies, useIsDarkTheme, useThemeName } from "../useTheme";

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

            nextTheme() {
                if (!themeNames.length) return;

                const currentIndex = themeNames.findIndex((theme) => theme === get().theme)

                const nextIndex =
                    currentIndex === -1
                        ? 0
                        : (currentIndex + 1) % themeNames.length;

                console.log("indice: " + currentIndex + " Proximo indice: " + nextIndex)

                get().setTheme(themeNames[nextIndex]);
            },

            nextThemeFamily() {
                const themeFamilies = themeNames
                    .filter((name) => themes[name].isDark === themes[get().theme].isDark)
                    .map((name) => ({
                        name,
                        family: themes[name].family,
                        theme: themes[name],
                    }));

                if (!themeFamilies.length) return;

                const currentIndex = themeFamilies.findIndex(
                    (theme) => theme.name === get().theme
                );

                const nextIndex =
                    currentIndex === -1
                        ? 0
                        : (currentIndex + 1) % themeFamilies.length;

                get().setTheme(themeFamilies[nextIndex].name);
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