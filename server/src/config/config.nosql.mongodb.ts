import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || "";

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 3030;

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  Server: {
    port: SERVER_PORT,
  },
};