import { Request, Response } from "express";

const getAllServicesByCategory = (req: Request, res: Response) => {
  res.send("You have gotten all posts by category");
};

export default getAllServicesByCategory;
