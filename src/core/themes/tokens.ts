import type { TokenKey } from "./types";

export const tokenSchema = [
    "primary",
    "secondary",

    "muted-100",
    "muted-200",
    "muted-300",
    "muted-400",
    "muted-500",
    "muted-600",
    "muted-700",
    "muted-800",
    "muted-900",

    "focus-outline",
    "focus-outline-contrast",
] as const;

export const themeTokenKeys: readonly TokenKey[] = tokenSchema;