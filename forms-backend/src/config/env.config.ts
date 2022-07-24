import dotenv from "dotenv";

dotenv.config();

const env = {
  app: {
    port: process.env.PORT ?? 3001,
    secret: process.env.JWT_SECRET,
    enviroment: process.env.NODE_ENV ?? "development",
  },
  db: {
    uri: process.env.MONGODB_URI,
  },
};

export default env;
