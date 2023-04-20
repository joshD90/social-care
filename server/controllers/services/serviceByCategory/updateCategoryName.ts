import { Request, Response } from "express";

const updateCategoryName = (req: Request, res: Response) => {
  const categoryToChange = req.params.category;
  const updatedName = req.body.newName;

  res.send(
    `You have changed ${categoryToChange} to the updated name of ${updatedName}`
  );
};

export default updateCategoryName;
