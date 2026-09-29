import type { NodePlopAPI } from "plop";
import { actions, prompts } from "./config.ts";

export function registerGenerator(plop: NodePlopAPI) {
    return plop.setGenerator("generator", {
        description: "Criar um novo gerador",

        prompts: prompts,
        actions: actions
    })
}