import type { PlopGeneratorConfig } from "plop";

// ========== TYPES =================================

export type Prompts = PlopGeneratorConfig['prompts'];
export type Actions = PlopGeneratorConfig['actions'];

// ========== CONFIG ================================

export const prompts: Prompts = [
    {
        type: "input",
        name: "name",
        message: "Nome do Generator"
    },
    {
        type: "input",
        name: "description",
        message: "Descrição do gerador"
    },
    {
        type: "input",
        name: "promptMessage",
        message: "Mensagem do prompt (ex: Nome do componente)"
    },
    {
        type: "input",
        name: "baseUrl",
        message: "Caminho onde os arquivos serão criados (ex: src/shared/...)"
    },
    {
        type: "list",
        name: "type",
        message: "Template de gerador",
        choices: [
            {
                name: "Component",
                value: "component"
            },
            {
                name: "Hook",
                value: "hook"
            },
            {
                name: "Empty",
                value: "empty"
            }
        ],
    }
];

export const actions: Actions = (answer) => {
    if (!answer)
        return [];

    switch (answer.type) {
        case "component":
            return [
                {
                    type: "add",
                    path: "tools/plop/generators/{{camelCase name}}/config.ts",
                    templateFile: "./tools/plop/system/generator/templates/component/config.hbs"
                },
                {
                    type: "add",
                    path: "tools/plop/generators/{{camelCase name}}/index.ts",
                    templateFile: "./tools/plop/system/generator/templates/component/index.hbs"
                },
                {
                    type: "add",
                    path: "tools/plop/generators/{{camelCase name}}/templates/{{camelCase name}}.hbs",
                    templateFile: "./tools/plop/system/generator/templates/component/template.hbs"
                },
                {
                    type: "append",
                    path: "tools/plop/index.ts",
                    pattern: "<plop:imports>",
                    template: 'import { register{{pascalCase name}}Generator } from "./generators/{{camelCase name}}/index.ts";',
                },
                {
                    type: "append",
                    path: "tools/plop/index.ts",
                    pattern: "<plop:generators>",
                    template: "  register{{pascalCase name}}Generator(plop);"
                }
            ]
        default:
            return []
    }
}