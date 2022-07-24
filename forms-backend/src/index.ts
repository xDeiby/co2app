import express from "express";
import cors from "cors";
import env from "./config/env.config";
import { authRouter, travelRouter } from "./routes";
import corsOptions from "./config/cors.config";

import "./database";
import "./auth";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use("/api/auth", authRouter);
app.use("/api/travels", travelRouter);

app.use(errorHandler);

app.listen(env.app.port, () => {
  console.log("Server listen on port", env.app.port);
});
