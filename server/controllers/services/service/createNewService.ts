import { Request, Response } from "express";

const createNewService = (req: Request, res: Response) => {
  const newService = req.body.service;
  res.send(`You have created a new Service`);
};

export default createNewService;
