import dotenv from "dotenv";
dotenv.config();

export default {
  db: {
    password: process.env.DB_PW as string,
    name: process.env.DB_NAME as string,
  },
};
