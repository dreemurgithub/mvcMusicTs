import dotenv from "dotenv";
dotenv.config();
import { Pool } from "pg";
const isLocalhost = process.env.ENVIROMENT === "DEV";

const pool = new Pool({
  port:
    process.env.POSTGRES_PORT && parseInt(process.env.POSTGRES_PORT)
      ? parseInt(process.env.POSTGRES_PORT)
      : 5432, // Postgres server port[s]
  database: process.env.POSTGRES_DB, // Name of database to connect to
  user: process.env.POSTGRES_USER, // Username of database user
  password: process.env.POSTGRES_PASSWORD, // Password of database user
  host: isLocalhost ? process.env.POSTGRES_LOCAL : process.env.POSTGRES_HOST, // for docker-compose up db, to just run the database
});

export { pool };
