import { Request, Response } from "express";

const deleteServiceById = (req: Request, res: Response) => {
  const serviceId = req.params.serviceId;
  res.send(`You have deleted service with the id of ${serviceId}`);
};

export default deleteServiceById;
