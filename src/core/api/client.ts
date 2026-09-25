import axios from "axios";
import { env } from "@/core/config/env";

export const api = axios.create({
    baseURL: env.apiUrl,
    timeout: env.apiTimeout,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});