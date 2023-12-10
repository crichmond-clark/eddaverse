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
const storyRoutes_js_1 = require("./api/v1/routes/storyRoutes.js");
const characterRoutes_js_1 = require("./api/v1/routes/characterRoutes.js");
const decisionRoutes_js_1 = require("./api/v1/routes/decisionRoutes.js");
const sceneRoutes_js_1 = require("./api/v1/routes/sceneRoutes.js");
const app = (0, express_1.default)();
app.get('/', (req, res, next) => {
    res.send('home');
});
app.listen(env_js_1.env.PORT, () => {
    console.log(`Server is running at ${env_js_1.env.PORT}`);
});
app.use('/api/v1/stories', storyRoutes_js_1.storyRouter);
app.use('/api/v1/characters', characterRoutes_js_1.characterRouter);
app.use('/api/v1/decisions', decisionRoutes_js_1.decisionRouter);
app.use('/api/v1/scenes', sceneRoutes_js_1.sceneRouter);
const sql = (0, postgres_1.default)(env_js_1.env.NEON_DATABASE_URL, { max: 1 });
const db = (0, postgres_js_1.drizzle)(sql);
const runMigrations = async () => await (0, migrator_1.migrate)(db, { migrationsFolder: './db/migrations' });
runMigrations();
