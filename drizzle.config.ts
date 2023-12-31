import type { Config } from 'drizzle-kit'

export default {
    schema: './db/schemas.ts',
    out: './db/migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.NEON_DATABASE_URL || '',
    },
} satisfies Config
