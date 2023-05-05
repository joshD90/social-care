import { Request, Response } from "express";
import {
  updateServiceById,
  updateSubAttributes,
} from "../../../db/queries/updateServiceById";
import connection from "../../../db/dbInit";
import { ReqUser } from "../../../types/authTypes";

const updateService = async (req: Request, res: Response) => {
  const user = req.user as ReqUser;
  if (user.privileges !== "admin")
    return res.status(401).json("only an admin may update a service");

  const serviceId = parseInt(req.params.serviceId);
  const body = req.body;

  //extract our data
  const { needsMet, clientGroups, areasServed, ...data } = body;

  try {
    //update our main section
    const updateResult = await updateServiceById(serviceId, data, connection);

    //error handle
    if (updateResult instanceof Error)
      throw new Error(
        `There was an error trying to update the MYSQL ${updateResult.message}`
      );

    if ((updateResult[0].affectedRows = 0))
      throw new Error("No Error Message but not updated");
    console.log("updated main service doc");
    //update our sub attributes
    const updatedSubAttributes = Promise.all([
      updateSubAttributes(
        { data: needsMet, subGroup: "needsMet" },
        connection,
        serviceId
      ),
      updateSubAttributes(
        { data: clientGroups, subGroup: "clientGroups" },
        connection,
        serviceId
      ),
      updateSubAttributes(
        { data: areasServed, subGroup: "areasServed" },
        connection,
        serviceId
      ),
    ]);
    console.log("completed promise.all");
    if ((await updatedSubAttributes).some((result) => result instanceof Error))
      throw new Error(`There was an issue in updating the subattributes`);
    console.log("should be firing back now");
    //on success
    res.status(204).json("Successfully updated");
  } catch (error) {
    if (error instanceof Error)
      return res
        .status(500)
        .json(
          `${error.message} there was an error in updating the MySql Database`
        );
  }
};

export default updateService;
