import { PromisePoolConnection } from "mysql2/promise";
import { initUserQueries } from "./queries/initUserTable";

const initialiseUserTables = async (connection: PromisePoolConnection) => {
  try {
    await connection.query(initUserQueries.initUserTable);
  } catch (error) {
    console.log(error);
  }
};

export default initialiseUserTables;
