import {
  FieldPacket,
  PromisePoolConnection,
  ResultSetHeader,
} from "mysql2/promise";
import { SubGroupReq } from "../../types/serviceTypes";
import { createSubRecord } from "./createServiceQueries";

const updateServiceById = async (
  id: number,
  data: { [key: string]: string | string[] },
  connection: PromisePoolConnection
): Promise<[ResultSetHeader, FieldPacket[]] | Error> => {
  //get our keys and values in "key = value" to sub into our prepared statement
  const updateKeys = Object.keys(data);
  const updateValues = Object.values(data);

  const keyQueryString = updateKeys.map((key) => `${key} = ?`).join(", ");

  const query = `UPDATE services SET ${keyQueryString} WHERE id = ?`;

  //execute query
  try {
    const result = await connection.query<ResultSetHeader>(query, [
      ...updateValues,
      id,
    ]);
    return result;
  } catch (error) {
    console.log(error);
    return error as Error;
  }
};

const updateSubAttributes = async (
  subAttribute: SubGroupReq,
  connection: PromisePoolConnection,
  serviceId: number
): Promise<"success" | Error | null> => {
  if (!subAttribute.data) return null;
  //which junction table to alter
  let junctionTable: string = "";
  if (subAttribute.subGroup === "needsMet") junctionTable = "service_needs";
  if (subAttribute.subGroup === "clientGroups")
    junctionTable = "service_clientGroups";
  if (subAttribute.subGroup === "areasServed") junctionTable = "service_areas";

  //make sure that we have cleared the junction table from previous entries
  const deleteQuery = `DELETE FROM ${junctionTable} WHERE service_id = ?`;

  try {
    await connection.query(deleteQuery, [serviceId]);
    //create our new sub attributes and the junction table entry also
    const updateResult = await createSubRecord(
      connection,
      subAttribute.subGroup,
      subAttribute.data,
      serviceId
    );
    if (updateResult instanceof Error)
      throw Error("Could not update the sub attributes");

    return "success";
  } catch (error) {
    console.log(error);
    return error as Error;
  }
};

export { updateServiceById, updateSubAttributes };
