import { z } from "zod";

const envSchema = z.object({
  // See https://cjihrig.com/node_env_considered_harmful
  NODE_ENV: z.enum(["development", "production", "test"]).default("production"),
  PORT: z.string(),
  DB_USER: z.string(),
  DB_HOST: z.string(),
  DB_NAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_PORT: z.string(),
  DRIZZLE_DATABASE_URL: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    `Missing or invalid environment variable${
      parsed.error.errors.length > 1 ? "s" : ""
    }:
${parsed.error.errors
  .map((error) => `  ${error.path}: ${error.message}`)
  .join("\n")}
`,
  );
  process.exit(1);
}

export const env = Object.freeze(parsed.data);
