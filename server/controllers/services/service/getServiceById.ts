import { Request, Response } from "express";

const getServiceById = (req: Request, res: Response) => {
  const serviceId = req.params.id;
  res.send(`You have recieved the service by the id of ${serviceId}`);
};
export default getServiceById;
