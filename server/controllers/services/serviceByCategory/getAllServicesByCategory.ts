import { Request, Response } from "express";
import getAllServicesByCategoryQuery from "../../../db/queries/getServicesByCategoryQuery";
import connection from "../../../db/dbInit";

const getAllServicesByCategory = async (req: Request, res: Response) => {
  const category = req.params.category;

  try {
    const servicesInCategory = await getAllServicesByCategoryQuery(
      connection,
      category
    );

    if (servicesInCategory instanceof Error)
      throw new Error(servicesInCategory.message);

    res.status(200).json(servicesInCategory);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .send(
          `There was a issue with retreiving the services in category with the message of ${error.message}`
        );
    } else res.status(500).json(error);
  }
};

export default getAllServicesByCategory;
