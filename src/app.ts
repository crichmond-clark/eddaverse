import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import express, { NextFunction, Request, Response } from 'express'
import postgres from 'postgres'
import { env } from './env.js'

const app = express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('home')
})

app.listen(env.PORT, () => {
    console.log(`Server is running at ${env.PORT}`)
})

const sql = postgres(env.NEON_DATABASE_URL, { max: 1 })
const db = drizzle(sql)

const runMigrations = async () =>
    await migrate(db, { migrationsFolder: './db/migrations' })

runMigrations()
