import type { NodePlopAPI } from "plop";

import { registerGenerators } from "./tools/plop/index.ts"

export default function (plop: NodePlopAPI) {
    registerGenerators(plop);
}