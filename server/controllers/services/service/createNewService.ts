import { Request, Response } from "express";

import connection from "../../../db/dbInit";
import {
  createServiceTableEntry,
  createSubRecord,
} from "../../../db/queries/createServiceQueries";
import { SubGroupReq } from "../../../types/serviceTypes";
import { ReqUser } from "../../../types/authTypes";

const createNewService = async (req: Request, res: Response) => {
  const user = req.user as ReqUser;
  if (user.privileges !== "admin")
    return res.status(401).json("Only an Admin may create a new Service");

  //make sure the connection is up and running
  if (!connection) res.status(500).send("Could not connect to the database");

  //seperate our many to many relationships from our main body of data
  const { needsMet, areasServed, clientGroups, ...data } = req.body;
  //dynamically plug our data into the query using a dynamically created prepared statement
  try {
    //first create our service table entry
    const newServiceBase = await createServiceTableEntry(data, connection);
    if (newServiceBase instanceof Error) {
      throw Error("could not make the new service entry");
    }
    //we get the id of the newly created table returned
    const entryId = newServiceBase.insertId;

    const manyToMany: SubGroupReq[] = [
      { data: needsMet, subGroup: "needsMet" },
      { data: clientGroups, subGroup: "clientGroups" },
      { data: areasServed, subGroup: "areasServed" },
    ];
    //now we create our relevant tables and the many to many relationships that they hold
    for (const relationship of manyToMany) {
      if (relationship.data.length !== 0) {
        const result = await createSubRecord(
          connection,
          relationship.subGroup,
          relationship.data,
          entryId
        );
        //go straight to our catch block - pass the error up through the functions
        if (result instanceof Error) throw new Error(result.message);
      }
    }

    res
      .status(201)
      .send({ message: "A new Service was created", serviceId: entryId });
  } catch (error) {
    console.log(error);
    const errorToSend = error instanceof Error ? error.message : error;
    res.status(500).send(errorToSend);
  }
};

export default createNewService;
