import { z } from "zod";

// ========== ENV VALIDATION ===================

const envSchema = z.object({
    VITE_API_URL: z
        .url()
        .optional().catch(undefined),
    VITE_API_TIMEOUT: z
        .coerce.number().nonnegative()
        .optional().catch(undefined),
});

const envVars = envSchema.safeParse(import.meta.env);

if (!envVars.success) {
    console.error("Invalid environment variables:", envVars.error.format());

    throw new Error("Invalid environment variables");
}

const { VITE_API_URL, VITE_API_TIMEOUT } = envVars.data;

// ========== EXPORT FORMAT ====================

export const env = {
    apiUrl: VITE_API_URL,
    apiTimeout: VITE_API_TIMEOUT,
};