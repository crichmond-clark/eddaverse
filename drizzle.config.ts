import type { Config } from 'drizzle-kit'
import { env } from './src/env.js'

export default {
    schema: './src/db/schemas.ts',
    out: './src/db/migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: env.NEON_DATABASE_URL || '',
    },
} satisfies Config
