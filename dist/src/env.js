"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z
        .enum(['development', 'production', 'test'])
        .default('production'),
    PORT: zod_1.z.string(),
    NEON_DATABASE_URL: zod_1.z.string(),
});
const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
    console.error(`Missing or invalid environment variable${parsed.error.errors.length > 1 ? 's' : ''}:
${parsed.error.errors
        .map((error) => `  ${error.path}: ${error.message}`)
        .join('\n')}
`);
    process.exit(1);
}
exports.env = Object.freeze(parsed.data);
