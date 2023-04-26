import { PromisePoolConnection, RowDataPacket } from "mysql2/promise";
import { getServiceSubAttributes } from "./getFullServiceQueries";
import { CategoryWithNeeds, ServiceDBReturn } from "../../types/serviceTypes";

const getAllServicesByCategoryQuery = async (
  connection: PromisePoolConnection,
  category: string
): Promise<Error | CategoryWithNeeds[]> => {
  const query = `SELECT *  FROM services WHERE category = ?`;

  try {
    const [services] = await connection.query<ServiceDBReturn[]>(query, [
      category,
    ]);
    if (services.length === 0)
      throw Error("Could not find any services under this category name");
    //due to calling multiple async calls, let them be called in parrallel but wait until they are all completed before returning the value
    const servicesWithAttribute = await Promise.all(
      services.map(async (service): Promise<CategoryWithNeeds> => {
        const needsMet = await getServiceSubAttributes(
          connection,
          service.id,
          "needsMet"
        );
        if (needsMet instanceof Error)
          throw new Error(
            "Issue with adding sub attribute needs met to service list"
          );

        const newService = { ...service, needsMet };
        return newService;
      })
    );

    return servicesWithAttribute;
  } catch (error) {
    return error as Error;
  }
};

export default getAllServicesByCategoryQuery;
