import { Express } from "express";

export interface AuthSignIn {
  username: string;
  password: string;
}

export interface AuthCreate extends AuthSignIn {
  passwordConfirm: string;
}

export type UserType = {
  id?: number;
  username: string;
  password: string;
  privileges: string;
};

export type UserWithoutPW = {
  id: number;
  username: string;
  privileges: string;
};

export interface ReqUser extends Express.User {
  id: number;
  username: string;
  privileges: "guest" | "user" | "admin";
}
