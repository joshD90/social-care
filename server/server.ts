import express from "express";
import cors from "cors";
require("dotenv").config();

import serviceRouter from "./routes/serviceRoutes";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use("/services", serviceRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server is Listening on port ${process.env.PORT}`)
);
