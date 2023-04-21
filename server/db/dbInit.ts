import mysql from "mysql2";
import envConfig from "../envConfig";

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "socialapi",
  database: envConfig.db.name,
  password: envConfig.db.password,
  connectionLimit: 10,
  waitForConnections: true,
});

export const connection = pool.promise();
