import { Request, Response } from "express";

const searchAllServices = (req: Request, res: Response) => {
  const searchQuery = req.body.searchTerms;
  res.send(
    `You made a search for a service using these parameters ${searchQuery}`
  );
};

export default searchAllServices;
