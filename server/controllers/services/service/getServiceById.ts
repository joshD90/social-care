import { Request, Response } from "express";
import {
  getServiceByIdQuery,
  getServiceSubAttributes,
} from "../../../db/queries/getFullServiceQueries";
import connection from "../../../db/dbInit";

//get a single service by it's id
const getServiceById = async (req: Request, res: Response) => {
  const serviceId = parseInt(req.params.serviceId as string);

  if (typeof serviceId !== "number" || Number.isNaN(serviceId))
    return res.status(500).send(`${serviceId} is not of type number`);

  try {
    const result = await getServiceByIdQuery(connection, serviceId);
    //on error or on null result
    if (result instanceof Error) throw new Error(result.message);
    if (result.length === 0)
      return res
        .status(404)
        .send("Could not find any entries matching that id");

    // get our relevant sub attributes
    const needsMet = await getServiceSubAttributes(
      connection,
      serviceId,
      "needsMet"
    );
    const clientGroups = await getServiceSubAttributes(
      connection,
      serviceId,
      "clientGroups"
    );
    const areasServed = await getServiceSubAttributes(
      connection,
      serviceId,
      "areasServed"
    );
    //attach all relevant sub attributes
    const serviceToReturn = {
      ...result[0],
      needsMet,
      clientGroups,
      areasServed,
    };
    res.status(200).json(serviceToReturn);
  } catch (error) {
    res.status(500).json(error);
  }
};
export default getServiceById;
