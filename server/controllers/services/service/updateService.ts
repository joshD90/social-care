import { Request, Response } from "express";

const updateServiceById = (req: Request, res: Response) => {
  const serviceId = req.params.serviceId;
  res.send(`You have updated ${serviceId}`);
};

export default updateServiceById;
