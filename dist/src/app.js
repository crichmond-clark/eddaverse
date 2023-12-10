"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_js_1 = require("drizzle-orm/postgres-js");
const migrator_1 = require("drizzle-orm/postgres-js/migrator");
const express_1 = __importDefault(require("express"));
const postgres_1 = __importDefault(require("postgres"));
const env_js_1 = require("./env.js");
const app = (0, express_1.default)();
app.get('/', (req, res, next) => {
    res.send('home');
});
app.listen(env_js_1.env.PORT, () => {
    console.log(`Server is running at ${env_js_1.env.PORT}`);
});
const sql = (0, postgres_1.default)(env_js_1.env.NEON_DATABASE_URL, { max: 1 });
const db = (0, postgres_js_1.drizzle)(sql);
const runMigrations = async () => await (0, migrator_1.migrate)(db, { migrationsFolder: './db/migrations' });
runMigrations();
