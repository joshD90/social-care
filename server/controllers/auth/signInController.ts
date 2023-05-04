import jwt from "jsonwebtoken";

import { Request, Response } from "express";
import { UserType, UserWithoutPW } from "../../types/authTypes";

import envConfig from "../../envConfig";

const signInController = (req: Request, res: Response): Response => {
  if (!req.user)
    return res
      .status(500)
      .json({ message: "There was an issue verfiying you credentials" });

  const user = req.user as UserWithoutPW;
  try {
    //create our user Token
    const token = jwt.sign(
      {
        username: user.username,
        id: user.id,
        privileges: user.privileges,
      },
      envConfig.jwt.secret,
      { expiresIn: "1d" }
    );
    return res
      .cookie("jwt", token, { httpOnly: true, secure: false })
      .status(200)
      .json(user);
  } catch (error) {
    return res.status(401).send({ message: "There was an error logging in" });
  }
};

export default signInController;
