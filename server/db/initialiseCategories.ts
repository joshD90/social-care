import { PromisePoolConnection, RowDataPacket } from "mysql2/promise";
import { Category } from "../types/serviceTypes";

const initialiseCategories = async (
  connection: PromisePoolConnection,
  categories: Category[]
): Promise<"success" | Error> => {
  const selectCategoriesQuery = "SELECT * FROM categories";

  try {
    //before we try and add our categories make sure that they aren't already present
    const [rows] = await connection.query<RowDataPacket[]>(
      selectCategoriesQuery
    );
    if (rows.length !== 0) return "success";

    //if not then we go through each of the category possibility and add then into them
    categories.forEach((category) => {
      const keys = Object.keys(category);
      const values = Object.values(category);
      const query = `INSERT INTO categories (${keys.join(
        ", "
      )}) VALUES (${values.map(() => "?").join(", ")})`;

      connection.execute(query, values);
    });
    return "success";
  } catch (error) {
    console.log(error);
    return error as Error;
  }
};

export default initialiseCategories;
