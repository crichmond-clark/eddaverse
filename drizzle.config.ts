import type { Config } from 'drizzle-kit'
import { env } from './src/env.js'

export default {
    schema: './db/schemas.ts',
    out: './db/migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: env.NEON_DATABASE_URL || '',
    },
} satisfies Config
