import { Request, Response } from "express";
import { ReqUser } from "../../../types/authTypes";

const deleteServiceById = (req: Request, res: Response) => {
  const user = req.user as ReqUser;
  if (user.privileges !== "admin")
    return res.status(401).json("only an admin may delete a service");

  const serviceId = req.params.serviceId;
  res.send(`You have deleted service with the id of ${serviceId}`);
};

export default deleteServiceById;
