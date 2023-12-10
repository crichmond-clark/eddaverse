"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_js_1 = require("./src/env.js");
exports.default = {
    schema: './db/schemas.ts',
    out: './db/migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: env_js_1.env.NEON_DATABASE_URL || '',
    },
};
