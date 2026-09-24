import type { ReactNode } from "react";

export interface AppRoute {
    path?: string;
    index?: boolean;
    element?: ReactNode;
    elementError?: ReactNode;
    children?: AppRoute[];
    abx?: string;
}