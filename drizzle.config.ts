// @ts-nocheck
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "yourpassword",
    ssl: false
  }
} satisfies Config;
