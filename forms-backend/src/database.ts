import mongoose from "mongoose";
import env from "./config/env.config";

mongoose
  .connect(env.db.uri)
  .then(() => console.log("Success connection db"))
  .catch((error) => console.error(error));
