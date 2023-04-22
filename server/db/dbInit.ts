import mysql from "mysql2";
import envConfig from "../envConfig";
import { PromisePoolConnection } from "mysql2/promise";
import initServiceTables from "./initialiseServiceTables";

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "socialapi",
  database: envConfig.db.name,
  password: envConfig.db.password,
  connectionLimit: 10,
  waitForConnections: true,
});

//set up our connection pool for async
const connection: PromisePoolConnection = pool.promise();

//set up all our tables
initServiceTables(connection);

export default connection;
