import type { NodePlopAPI } from "plop";
import kleur from "kleur";
import {
    addActions, addPrompts, removeActions, removePrompts,
    addSectionActions, addSectionPrompts, removeSectionPrompts, removeSectionActions,
    createThemePrompts, createThemeActions
} from "./config.ts";
import { Node, Project, SyntaxKind } from "ts-morph";
import { tokenSchema } from "../../../../../src/core/themes/tokens.ts";

// ========== TOKEN ================================

export function registerAddTokenGenerator(plop: NodePlopAPI) {
    return [
        plop.setGenerator("token:add", {
            description: "Adiciona um token de tema",

            prompts: addPrompts,
            actions: addActions
        }),

        plop.setActionType("add-theme-token",
            async (answers) => {
                const project = new Project();

                const sourceFile = project.addSourceFileAtPath(
                    "src/core/themes/tokens.ts"
                )

                // encontra variavel
                const declaration = sourceFile.getVariableDeclarationOrThrow(
                    "tokenSchema",
                );

                // pega valor da constante
                const initializer = declaration.getInitializerOrThrow();

                if (!Node.isAsExpression(initializer)) {
                    throw new Error(
                        'Esperado "tokenSchema = [...] as const"',
                    );
                }

                const schema = initializer.getExpression();

                if (!Node.isArrayLiteralExpression(schema)) {
                    throw new Error(
                        'Token precisa ser um array"',
                    );
                }

                const mainSection = schema
                    .getElements()
                    .filter(Node.isObjectLiteralExpression)
                    .find(section => {
                        const property = section.getProperty("section");

                        if (!property || !Node.isPropertyAssignment(property))
                            return false;

                        const value = property.getInitializer();

                        return (
                            Node.isStringLiteral(value) &&
                            value.getLiteralText() === answers.section
                        )
                    });

                if (!mainSection) {
                    throw new Error(
                        `Seção ${answers.section} não encontrada`,
                    )
                }

                const tokensProperty = mainSection.getPropertyOrThrow("tokens");

                if (!Node.isPropertyAssignment(tokensProperty)) {
                    throw new Error(
                        '"tokens" não é uma propriedade válida'
                    )
                }

                const tokens = tokensProperty.getInitializerIfKindOrThrow(
                    SyntaxKind.ArrayLiteralExpression,
                )

                tokens.addElement(`"${answers.token}"`)

                await sourceFile.save();

                return `Token "${answers.token}" adicionado!`
            }
        )
    ]
}

export function registerRemoveTokenGenerator(plop: NodePlopAPI) {
    return [
        plop.setGenerator("token:remove", {
            description: "Remove um token de tema",

            prompts: removePrompts,
            actions: removeActions
        }),

        plop.setActionType("remove-theme-token",
            async (answers) => {
                const project = new Project();

                const sourceFile = project.addSourceFileAtPath(
                    "src/core/themes/tokens.ts"
                )

                // encontra variavel
                const declaration = sourceFile.getVariableDeclarationOrThrow(
                    "tokenSchema",
                );

                // pega valor da constante
                const initializer = declaration.getInitializerOrThrow();

                if (!Node.isAsExpression(initializer)) {
                    throw new Error(
                        'Esperado "tokenSchema = [...] as const"',
                    );
                }

                const schema = initializer.getExpression();

                if (!Node.isArrayLiteralExpression(schema)) {
                    throw new Error(
                        'Token precisa ser um array"',
                    );
                }

                const mainSection = schema
                    .getElements()
                    .filter(Node.isObjectLiteralExpression)
                    .find(section => {
                        const property = section.getProperty("section");

                        if (!property || !Node.isPropertyAssignment(property))
                            return false;

                        const value = property.getInitializer();

                        return (
                            Node.isStringLiteral(value) &&
                            value.getLiteralText() === answers.token.section
                        )
                    });

                if (!mainSection) {
                    throw new Error(
                        `Seção ${answers.token.section} não encontrada`,
                    )
                }

                const tokensProperty = mainSection.getPropertyOrThrow("tokens");

                if (!Node.isPropertyAssignment(tokensProperty)) {
                    throw new Error(
                        '"tokens" não é uma propriedade válida'
                    )
                }

                const tokens = tokensProperty.getInitializerIfKindOrThrow(
                    SyntaxKind.ArrayLiteralExpression,
                )

                const tokenToRemove = tokens
                    .getElements()
                    .find(element =>
                        Node.isStringLiteral(element) &&
                        element.getLiteralText() === answers.token.token
                    );

                if (!tokenToRemove) {
                    throw new Error(
                        `Token ${tokenToRemove} removido!`
                    )
                }

                tokens.removeElement(tokenToRemove);

                await sourceFile.save();

                return `Token "${answers.token.token}" removido!`
            }
        )
    ]
}

export function registerListTokenGenerator(plop: NodePlopAPI) {
    return [
        plop.setGenerator("token:list", {
            description: "Exibe lista de tokens",

            prompts: [],
            actions: [
                () => {
                    const output = tokenSchema
                        .map(section => {
                            const tokens = section.tokens
                                .map(token => kleur.gray(` - ${token}`))
                                .join("\n");

                            return [
                                kleur.bold(`${kleur.cyan(`${section.section}`)} - ${section.description}`),
                                tokens,
                            ].join("\n");
                        })
                        .join("\n\n");

                    return `\n${kleur.yellow("Tokens atuais:")}\n\n${output}`;
                }
            ],
        })
    ]
}

// ========== TOKEN SECTION ================================

export function registerAddTokenSectionGenerator(plop: NodePlopAPI) {
    return [
        plop.setGenerator("token-section:add", {
            description: "Adiciona uma seção de token de tema",

            prompts: addSectionPrompts,
            actions: addSectionActions
        }),

        plop.setActionType("add-theme-section-token",
            async (answers) => {
                const project = new Project();

                const sourceFile = project.addSourceFileAtPath(
                    "src/core/themes/tokens.ts"
                )

                // encontra variavel
                const declaration = sourceFile.getVariableDeclarationOrThrow(
                    "tokenSchema",
                );

                // pega valor da constante
                const initializer = declaration.getInitializerOrThrow();

                if (!Node.isAsExpression(initializer)) {
                    throw new Error(
                        'Esperado "tokenSchema = [...] as const"',
                    );
                }

                const schema = initializer.getExpression();

                if (!Node.isArrayLiteralExpression(schema)) {
                    throw new Error(
                        'Token precisa ser um array"',
                    );
                }

                schema.addElement(`
{
    section: "${answers.name}",
    description: "${answers.description}",
    tokens: [
    ],
}    
                `)

                await sourceFile.save();

                return `Seção ${answers.name} Adicionado`
            }
        )
    ]
}

export function registerRemoveTokenSectionGenerator(plop: NodePlopAPI) {
    return [
        plop.setGenerator("token-section:remove", {
            description: "Remove uma seção de token de tema",

            prompts: removeSectionPrompts,
            actions: removeSectionActions
        }),

        plop.setActionType("remove-theme-section-token",
            async (answers) => {
                if (answers.confirm !== "yes" && answers.confirm !== "y") {
                    throw new Error("Operação cancelada")
                }

                const project = new Project();

                const sourceFile = project.addSourceFileAtPath(
                    "src/core/themes/tokens.ts"
                )

                // encontra variavel
                const declaration = sourceFile.getVariableDeclarationOrThrow(
                    "tokenSchema",
                );

                // pega valor da constante
                const initializer = declaration.getInitializerOrThrow();

                if (!Node.isAsExpression(initializer)) {
                    throw new Error(
                        'Esperado "tokenSchema = [...] as const"',
                    );
                }

                const schema = initializer.getExpression();

                if (!Node.isArrayLiteralExpression(schema)) {
                    throw new Error(
                        'Token precisa ser um array"',
                    );
                }

                const sectionToRemove = schema
                    .getElements()
                    .find(element => {
                        if (!Node.isObjectLiteralExpression(element))
                            return false;

                        const sectionProperty = element.getProperty("section");

                        if (!sectionProperty || !Node.isPropertyAssignment(sectionProperty))
                            return false;

                        const sectionValue = sectionProperty.getInitializer();

                        return (
                            Node.isStringLiteral(sectionValue) &&
                            sectionValue.getLiteralText() === answers.name
                        )
                    }
                    );

                if (!sectionToRemove) {
                    throw new Error(
                        `Section "${answers.name}" não encontrada`
                    )
                }

                schema.removeElement(sectionToRemove)

                await sourceFile.save();

                return `Seção "${answers.name}" Removido`
            }
        )
    ]
}

export function registerListTokenSectionGenerator(plop: NodePlopAPI) {
    return [
        plop.setGenerator("token-section:list", {
            description: "Exibe lista de seções",

            prompts: [],
            actions: [
                () => {
                    const sections = tokenSchema.map(section => {
                        return `- ${section.section} ${kleur.gray(section.description)}`
                    })
                        .join("\n");

                    return `\n${kleur.yellow("Seções atuais:")}\n\n${sections}`
                }
            ],
        })
    ]
}

// ========== THEME ========================================

export function registerCreateThemeGenerator(plop: NodePlopAPI) {
    return [
        plop.setHelper("eq", (a, b) => a === b),

        plop.setHelper("isLastOfSection", (schema, index) => {
            const current = schema[index];
            const next = schema[index + 1];

            return !next || current.section !== next.section;
        }),

        plop.setGenerator("theme:create", {
            description: "Criar novo tema",

            prompts: createThemePrompts,
            actions: createThemeActions,
        }),
    ]
}