import { Request, Response } from "express";

const getAllServices = (req: Request, res: Response) => {
  res.send("You have gotten all services available");
};

export default getAllServices;
