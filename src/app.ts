import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import express, { NextFunction, Request, Response } from 'express'
import postgres from 'postgres'

import { env } from './env.js'
import { storyRouter } from './api/v1/routes/storyRoutes.js'
import { characterRouter } from './api/v1/routes/characterRoutes.js'
import { decisionRouter } from './api/v1/routes/decisionRoutes.js'
import { sceneRouter } from './api/v1/routes/sceneRoutes.js'

const app = express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('home')
})

app.listen(env.PORT, () => {
    console.log(`Server is running at ${env.PORT}`)
})
app.use('/api/v1/stories', storyRouter)
app.use('/api/v1/characters', characterRouter)
app.use('/api/v1/decisions', decisionRouter)
app.use('/api/v1/scenes', sceneRouter)

const sql = postgres(env.NEON_DATABASE_URL, { max: 1 })
const db = drizzle(sql)

const runMigrations = async () =>
    await migrate(db, { migrationsFolder: './db/migrations' })

runMigrations()
