import express, { Request, Response } from "express";

import passport from "passport";

import signUpController from "../controllers/auth/signUpController";
import signInController from "../controllers/auth/signInController";
import signOutController from "../controllers/auth/signOutController";

const router = express.Router();

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signInController
);
router.post("/signup", signUpController);
router.get("/signout", signOutController);

export default router;
