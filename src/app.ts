
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import express, { NextFunction, Request, Response } from "express";
import { env } from './env.js';



const app = express();


app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("home");
});

app.listen(env.PORT, () => {
  console.log(`Server is running at ${env.PORT}`);
});



// for query purposes
const queryClient = postgres(env.DRIZZLE_DATABASE_URL);
const db = drizzle(queryClient);
// await db.select().from(...)...


