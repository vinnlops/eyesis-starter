import type { TokenKey, TokenSchema } from "./types";

export const tokenSchema: TokenSchema = [
    {
        section: "main",
        description: "Cores principais",
        tokens: [
            "secondary",
            "primary"
        ],
    },
    {
        section: "background",
        description: "Cores de fundo",
        tokens: [
            "background"
        ]
    },
    {
        section: "muted",
        description: "Variações de texto",
        behavior: "interpolate",
        tokens: [
            "muted-100",
            "muted-200",
            "muted-300",
            "muted-400",
            "muted-500",
            "muted-600",
            "muted-700",
            "muted-800",
            "muted-900",
        ]
    },
    {
        section: "outline",
        description: "Outlines",
        tokens: [
            "focus-outline",
            "focus-outline-contrast"
        ]
    }    
                    
] as const;

export const themeTokenKeys: readonly TokenKey[] = tokenSchema.flatMap(
    section => section.tokens
);