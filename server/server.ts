import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
require("dotenv").config();

import serviceRouter from "./routes/serviceRoutes";
import authRouter from "./routes/authRoutes";
import { configurePassport } from "./utils/passport-strategies";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

configurePassport(app);

app.use("/services", serviceRouter);
app.use("/auth", authRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server is Listening on port ${process.env.PORT}`)
);
