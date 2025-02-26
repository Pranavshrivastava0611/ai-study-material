import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_O54tkQpcmynM@ep-sweet-sea-a1543l71-pooler.ap-southeast-1.aws.neon.tech/ai-study-gen?sslmode=require",
  },
});
