import { Request, Response } from "express";
import { ReqUser } from "../../types/authTypes";
import getUserByUserName from "../../db/queries/authQueries/getUserByUserName";
import connection from "../../db/dbInit";
//this is the controller for the endpoint for when we refresh the page.  The authcontext first looks here and will pass the cookie to our middleware and it will retrieve the user to set in its context from this endpoint
const userDataController = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json("Your Credentials are Invalid");
  //to manage this statelessly we can simply return the deserialised cookie information as we can confirm that this is authenticated due to the JWT signing
  const user = req.user as ReqUser;
  res.status(200).json(user);
};

export default userDataController;
