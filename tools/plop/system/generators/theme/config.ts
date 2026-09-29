import kleur from "kleur";
import { tokenSchema } from "../../../../../src/core/themes/tokens.ts";
import type { PlopGeneratorConfig } from "plop";
import type { ThemeMode } from "@/core/themes/types.ts";

// ========== TYPES =================================

export type Prompts = PlopGeneratorConfig['prompts'];
export type Actions = PlopGeneratorConfig['actions'];

// ========== PROMPTS ================================

export const addPrompts: Prompts = [
    {
        type: "list",
        name: "section",
        message: "Em qual seção deseja adicionar?",
        choices: tokenSchema.map(section => ({
            name: `${kleur.bold(section.section)} - ${kleur.gray(section.description)}`,
            value: section.section
        })),
    },
    {
        type: "input",
        name: "token",
        message: "Nome do token"
    },
];

export const removePrompts: Prompts = [
    {
        type: "list",
        name: "token",
        message: "Qual token deseja remover?",
        choices: tokenSchema.flatMap(section => section.tokens.map(token => ({
            name: `${kleur.bold(token)} - ${kleur.gray(section.section)}`,
            value: {
                token: token,
                section: section.section
            }
        }))),
    },
    {
        type: "input",
        name: "token",
        message: "Nome do token"
    },
];

export const addSectionPrompts: Prompts = [
    {
        type: "input",
        name: "name",
        message: "Nome da seção(conjunto de tokens): "
    },
    {
        type: "input",
        name: "description",
        message: "Descrição da seção: "
    }
];

export const removeSectionPrompts: Prompts = [
    {
        type: "list",
        name: "name",
        message: "Qual o nome da seção que deseja remover?",
        choices: tokenSchema.map(section => ({
            name: `${kleur.bold(section.section)} - ${kleur.gray(section.description)}`,
            value: section.section
        })),
    },
    {
        type: "input",
        name: "confirm",
        message: `Tem certeza que deseja remover esta seção? ${kleur.red("TODOS")} os tokens serão removidos [yes/no]:`
    }
];

export const createThemePrompts: Prompts = [
    {
        type: "input",
        name: "name",
        message: `Qual a familia deste tema ${kleur.gray("(magma, sky, graphite...)")}?`
    },
    ...tokenSchema
        .flatMap(section => section.tokens)
        .map((token, index) => ({
            type: "input",
            name: `${token}-light`,
            message: `${index === 0 ? (`\n\nTema ${kleur.bold("Claro")}:\n\n`) : ""}${kleur.yellow(token)}: ${kleur.gray("#")}`
        })),
    ...tokenSchema
        .flatMap(section => section.tokens)
        .map((token, index) => ({
            type: "input",
            name: `${token}-dark`,
            message: `${index === 0 ? (`\n\nTema ${kleur.bold("Escuro")}:\n\n`) : ""}${kleur.yellow(token)}: ${kleur.gray("#")}`
        })),
]

// ========== ACTIONS ================================

export const addActions: Actions = [
    {
        type: "add-theme-token",
    }
]

export const removeActions: Actions = [
    {
        type: "remove-theme-token",
    }
]

export const addSectionActions: Actions = [
    {
        type: "add-theme-section-token",
    }
]

export const removeSectionActions: Actions = [
    {
        type: "remove-theme-section-token",
    }
]

function createSchema(answers: Record<string, string>, mode: ThemeMode) {
    return tokenSchema.flatMap((section) =>
        section.tokens.map((token, index) => ({
            section: section.section,
            token,
            hex: answers[`${token}-${mode}`],
            isLastOfSection: index === section.tokens.length - 1,
        })),
    );
}

const themeModes = ["light", "dark"] as const;

export const createThemeActions: Actions = (answers?: Record<string, any>) => {
    if (!answers)
        return [];

    if(!answers.name || answers.name.trim() === "")
        return [`${kleur.red("Erro")}: tema deve ter um nome válido`]

    return themeModes.map((themeMode) => ({
        type: "add",
        path: `src/core/themes/presets/{{kebabCase name}}/${themeMode}.ts`,
        templateFile: "./tools/plop/system/generators/theme/templates/theme.hbs",
        data: {
            themeFamily: answers.name,
            themeMode,
            schema: createSchema(answers, themeMode),
        }
    }))
}
