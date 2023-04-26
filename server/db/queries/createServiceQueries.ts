import {
  PromisePoolConnection,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";
import { ServiceBaseType, SubGroupNames } from "../../types/serviceTypes";

export const createServiceTableEntry = async (
  data: ServiceBaseType,
  connection: PromisePoolConnection
): Promise<ResultSetHeader | Error> => {
  //we want to dynamically insert the values into our prepared statement
  const values = Object.values(data);
  const keys = Object.keys(data);
  //this will create a dynamic query string [key1, key2, key3,...] and [?,?,?,...]
  const query = `INSERT INTO services (${keys.join(", ")}) VALUES (${values
    .map(() => "?")
    .join(", ")})`;

  try {
    const [rows] = await connection.execute<ResultSetHeader>(query, values);
    if (!rows) throw new Error("Could not create entry");
    return rows;
  } catch (error) {
    console.log(error);
    return error as Error;
  }
};

export const createSubRecord = async (
  connection: PromisePoolConnection,
  table: SubGroupNames,
  data: string[],
  newEntryId: number
): Promise<"success" | Error> => {
  //dynamically create our query for subattribute table as well as junction table
  let columnName: string;
  let junctionTable: string;
  let junctionTableCol: string;
  switch (table) {
    case "needsMet":
      columnName = "need";
      junctionTable = "service_needs";
      junctionTableCol = "need_id";
      break;
    case "clientGroups":
      columnName = "groupName";
      junctionTable = "service_clientGroups";
      junctionTableCol = "clientGroup_id";
      break;
    case "areasServed":
      columnName = "area";
      junctionTable = "service_areas";
      junctionTableCol = "area_id";
      break;
  }

  for (const entry of data) {
    try {
      //first see whether there is already an entry of that type
      const [rows] = await connection.query<RowDataPacket[]>(
        `SELECT * FROM ${table} WHERE ${columnName} = '${entry}'`
      );
      //if it is, grab the id of that row and create a junction entry
      if (rows.length !== 0) {
        const subAttributeId = rows[0].id;
        await connection.query(
          `INSERT IGNORE INTO ${junctionTable} (service_id, ${junctionTableCol}) VALUES (?, ?)`,
          [newEntryId, subAttributeId]
        );
      } else {
        //if its not already there create a new one
        const [newSubAttribute] = await connection.execute<ResultSetHeader>(
          `INSERT INTO ${table} (${columnName}) VALUES (?)`,
          [entry]
        );
        //now create our junction table entry
        const subAttributeId = newSubAttribute.insertId;
        await connection.query(
          `INSERT IGNORE INTO ${junctionTable} (service_id, ${junctionTableCol}) VALUES (?, ?)`,
          [newEntryId, subAttributeId]
        );
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) return error;
      break;
    }
  }
  return "success";
};
