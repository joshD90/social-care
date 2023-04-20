import { Request, Response } from "express";

const createNewCategory = (req: Request, res: Response) => {
  const categoryName = req.params.category;
  res.send(`You have created a new category by the name of ${categoryName}`);
};

export default createNewCategory;
