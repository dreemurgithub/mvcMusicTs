const localDev = process.env.ENVIROMENT === "DEV";
import express, {  Application } from "express";
import session from "express-session";
import { pool } from "./database/postgres";
import connectPgSimple from "connect-pg-simple"; 

const pgSession = connectPgSimple(session)

const configSession: Application = express();

configSession.use(
  session({
    secret: `${process.env.SECRETSESSION}`,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days,
      sameSite: localDev ? "lax" : "none",
      secure: localDev ? "auto" : true,
      httpOnly: true
    },
    store: new pgSession({
      pool,
      tableName:'user_sessions'
    }),
  })
);
export default configSession;
