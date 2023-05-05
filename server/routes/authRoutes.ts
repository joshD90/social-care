import express, { Request, Response } from "express";

import passport from "passport";

import signUpController from "../controllers/auth/signUpController";
import signInController from "../controllers/auth/signInController";
import signOutController from "../controllers/auth/signOutController";
import userDataController from "../controllers/auth/userDataController";

const router = express.Router();

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signInController
);
router.post("/signup", signUpController);
router.get("/signout", signOutController);
//for page refresh to update our context without storing in local storage
router.get(
  "/user-data",
  passport.authenticate("jwt", { session: false }),
  userDataController
);

export default router;
