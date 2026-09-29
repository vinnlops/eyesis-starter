import type { NodePlopAPI } from "plop";
import { registerGenerator } from "./system/generators/generator/index.ts";
import {
    registerAddTokenGenerator, registerAddTokenSectionGenerator, registerListTokenGenerator,
    registerListTokenSectionGenerator, registerRemoveTokenGenerator, registerRemoveTokenSectionGenerator,
    registerCreateThemeGenerator
} from "./system/generators/theme/index.ts";

// <plop:imports>

export function registerGenerators(plop: NodePlopAPI) {

    // ========== SYSTEM GENERATORS =============

    registerGenerator(plop);

    registerRemoveTokenGenerator(plop);
    registerAddTokenGenerator(plop);
    registerListTokenGenerator(plop);

    registerAddTokenSectionGenerator(plop);
    registerRemoveTokenSectionGenerator(plop);
    registerListTokenSectionGenerator(plop);

    registerCreateThemeGenerator(plop);

    // ========== CUSTOM GENERATORS =============

    // <plop:generators>
}