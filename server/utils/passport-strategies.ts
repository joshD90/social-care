import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { JwtFromRequestFunction, Strategy as JWTStrategy } from "passport-jwt";
import bcrypt from "bcrypt";

import { Application } from "express";

import connection from "../db/dbInit";
import getUserByUserName from "../db/queries/authQueries/getUserByUserName";
import envConfig from "../envConfig";

export const configurePassport = (app: Application) => {
  //our local strategy - for intial login
  passport.use(
    new LocalStrategy(
      //just to ensure that we are referencing the same field
      { usernameField: "username" },
      //our verify callback function
      async (username, password, done) => {
        try {
          //first find out user
          const userFound = await getUserByUserName(connection, username);
          //if we cant find the user return error
          if (userFound instanceof Error) return done(null, false);
          //check our matching passwords
          const passwordMatches = await bcrypt.compare(
            password,
            userFound.password
          );
          if (!passwordMatches) return done(null, false);
          //remove sensitive data before returning user
          delete userFound.password;
          return done(null, userFound);
        } catch (error) {
          console.log(error);
          return done(error);
        }
      }
    )
  );

  //set up our JWT Strategy
  passport.use(
    new JWTStrategy(
      { jwtFromRequest: cookieExtractor, secretOrKey: envConfig.jwt.secret },
      (payload, done) => {
        try {
          done(null, payload);
        } catch (error) {
          done(error);
        }
      }
    )
  );
  //initialise our passport once we have set up our local strategies
  app.use(passport.initialize());
};

//this is the functiont that is plugged into JWTFromRequest config options
const cookieExtractor: JwtFromRequestFunction = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }

  return token;
};
