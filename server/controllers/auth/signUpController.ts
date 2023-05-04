import { Request, Response } from "express";
import bcrypt from "bcrypt";

import createNewUser from "../../db/queries/authQueries/createNewUser";
import connection from "../../db/dbInit";
import { UserType } from "../../types/authTypes";

const signUpController = async (req: Request, res: Response) => {
  const userData = req.body;
  //make sure our data is in the correct format
  if (!userData.username || !userData.password || !userData.passwordConfirm)
    return res.status(500).send("Incorrect or incomplete data");
  if (userData.password !== userData.passwordConfirm)
    return res.status(500).send("Password confirmation does not match");

  try {
    const hashedPW = await bcrypt.hash(userData.password, 10);

    //reform our data into what will fit our table
    const userEntry: UserType = {
      username: userData.username,
      password: hashedPW,
      privileges: "user",
    };

    //create our user
    const createUser = await createNewUser(connection, userEntry);
    //if it throws an error
    if (createUser instanceof Error)
      return res.status(500).json(createUser.message);
    //other wise return an ok response
    res.status(201).json("Your New User was Successfully Created");
  } catch (error) {
    res.status(500).json(error);
  }
};

export default signUpController;
