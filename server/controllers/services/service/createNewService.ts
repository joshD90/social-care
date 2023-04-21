import { Request, Response } from "express";
import { connection } from "../../../db/dbInit";
import envConfig from "../../../envConfig";

const createNewService = async (req: Request, res: Response) => {
  // const newService = req.body.service;

  if (!connection) res.status(500).send("Could not connect to the database");

  try {
    await connection.query(
      "CREATE TABLE IF NOT EXISTS services (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) UNIQUE NOT NULL,serviceName VARCHAR(255) NOT NULL)"
    );
    res.status(201).send("New Table Created");
  } catch (error) {
    res.status(500).send(error);
  }
};

export default createNewService;
