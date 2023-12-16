import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import express, { NextFunction, Request, Response } from 'express'
import postgres from 'postgres'

import { env } from './env.js'
import { storyRouter } from './api/v1/routes/storyRoutes.js'
import { characterRouter } from './api/v1/routes/characterRoutes.js'
import { decisionRouter } from './api/v1/routes/decisionRoutes.js'
import { sceneRouter } from './api/v1/routes/sceneRoutes.js'
import { userRouter } from './api/v1/routes/userRoutes.js'
import * as schema from '../db/schemas.js'
const app = express()

//entry point
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('home')
})

app.listen(env.PORT, () => {
    console.log(`Server is running at ${env.PORT}`)
})

//routes
app.use('/api/v1/stories', storyRouter)
app.use('/api/v1/characters', characterRouter)
app.use('/api/v1/decisions', decisionRouter)
app.use('/api/v1/scenes', sceneRouter)
app.use('/api/v1/users', userRouter)

//database
const sql = postgres(env.NEON_DATABASE_URL, { max: 1 })

export const db = drizzle(sql, { schema })

const runMigrations = async () =>
    await migrate(db, { migrationsFolder: './db/migrations' })

runMigrations()
