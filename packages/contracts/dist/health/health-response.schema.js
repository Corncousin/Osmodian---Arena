import { z } from 'zod';
export const healthResponseSchema = z.object({
    status: z.literal('ok'),
    service: z.literal('api'),
});
//# sourceMappingURL=health-response.schema.js.map