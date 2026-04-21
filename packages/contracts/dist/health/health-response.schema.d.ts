import { z } from "zod";
export declare const healthResponseSchema: z.ZodObject<{
    status: z.ZodLiteral<"ok">;
    service: z.ZodLiteral<"api">;
}, "strip", z.ZodTypeAny, {
    status: "ok";
    service: "api";
}, {
    status: "ok";
    service: "api";
}>;
export type HealthResponse = z.infer<typeof healthResponseSchema>;
