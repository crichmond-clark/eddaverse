"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_js_1 = require("drizzle-orm/postgres-js");
const postgres_1 = __importDefault(require("postgres"));
const express_1 = __importDefault(require("express"));
const env_js_1 = require("./env.js");
const app = (0, express_1.default)();
app.get("/", (req, res, next) => {
    res.send("home");
});
app.listen(env_js_1.env.PORT, () => {
    console.log(`Server is running at ${env_js_1.env.PORT}`);
});
// for query purposes
const queryClient = (0, postgres_1.default)(env_js_1.env.DRIZZLE_DATABASE_URL);
const db = (0, postgres_js_1.drizzle)(queryClient);
// await db.select().from(...)...
