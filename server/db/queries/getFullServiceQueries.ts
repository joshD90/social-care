import { PromisePoolConnection, RowDataPacket } from "mysql2/promise";

export const getServiceByIdQuery = async (
  connection: PromisePoolConnection,
  serviceId: number
): Promise<RowDataPacket[] | Error> => {
  const query = `SELECT * FROM services WHERE id = ?`;
  try {
    const [result] = await connection.query<RowDataPacket[]>(query, [
      serviceId,
    ]);

    return result;
  } catch (error) {
    console.log(error);
    return error as Error;
  }
};

export const getServiceSubAttributes = async (
  connection: PromisePoolConnection,
  serviceId: number,
  attribute: "needsMet" | "clientGroups" | "areasServed"
): Promise<any[] | Error> => {
  let junctionTable: string;
  let colName: string;
  let junctionTableTargetCol: string;
  switch (attribute) {
    case "needsMet":
      junctionTable = "service_needs";
      junctionTableTargetCol = "service_needs.need_id";
      colName = "need";
      break;
    case "clientGroups":
      junctionTable = "service_clientGroups";
      junctionTableTargetCol = "service_clientGroups.clientGroup_id";
      colName = "groupName";
      break;
    case "areasServed":
      junctionTable = "service_areas";
      junctionTableTargetCol = "service_areas.area_id";
      colName = "area";
      break;
  }
  //formulate our query based on which sub attribute we are seeking
  const query = `SELECT ${colName} FROM ${junctionTable} JOIN ${attribute} ON ${junctionTableTargetCol} = ${attribute}.id WHERE service_id = ?`;

  const values = [serviceId];

  try {
    const [rows] = await connection.query<RowDataPacket[]>(query, values);
    const arrayOfAttributes = rows.map((row) => Object.values(row)[0]);
    const result = await connection.query(query, values);
    if (attribute === "areasServed") console.log(result);
    return arrayOfAttributes;
  } catch (error) {
    console.log(error);
    return error as Error;
  }
};
