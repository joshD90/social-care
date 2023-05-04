import { PromisePoolConnection, RowDataPacket } from "mysql2/promise";

const getUserByUserName = async (
  connection: PromisePoolConnection,
  username: string
): Promise<RowDataPacket | Error> => {
  const query = "SELECT * FROM users WHERE username = ?";
  try {
    const [result] = await connection.query<RowDataPacket[]>(query, [username]);
    if (result.length === 0)
      throw new Error("Could not Locate any user by this name");
    return result[0];
  } catch (error) {
    return error as Error;
  }
};

export default getUserByUserName;
