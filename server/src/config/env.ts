import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT ? Number(process.env.PORT) : 3333,
  databaseUrl: process.env.DATABASE_URL || "./database.sqlite",
};
