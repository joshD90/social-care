import { PromisePoolConnection, ResultSetHeader } from "mysql2/promise";
import { AuthCreate, UserType } from "../../../types/authTypes";

const createNewUser = async (
  connection: PromisePoolConnection,
  newUserObj: UserType
): Promise<ResultSetHeader | Error> => {
  const values = Object.values(newUserObj);
  const keys = Object.keys(newUserObj);

  const query = `INSERT INTO users (${keys.join(", ")}) VALUES (${keys
    .map((key) => "?")
    .join(", ")}) `;
  try {
    const [rows] = await connection.query<ResultSetHeader>(query, values);
    if (!rows)
      throw new Error("There was an Error when Creating this new User");
    return rows;
  } catch (error) {
    return error as Error;
  }
};

export default createNewUser;
