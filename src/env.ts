import { z } from 'zod'

const envSchema = z.object({
    NODE_ENV: z
        .enum(['development', 'production', 'test'])
        .default('production'),
    PORT: z.string(),
    NEON_DATABASE_URL: z.string(),
    JWT_SECRET: z.string(),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
    console.error(
        `Missing or invalid environment variable${
            parsed.error.errors.length > 1 ? 's' : ''
        }:
${parsed.error.errors
    .map((error) => `  ${error.path}: ${error.message}`)
    .join('\n')}
`
    )
    process.exit(1)
}

export const env = Object.freeze(parsed.data)
