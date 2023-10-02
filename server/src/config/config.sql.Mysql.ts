import { createPool } from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

const MySQL_Host = process.env.MySQL_Host || "";
const User = process.env.User || "";
const Password = process.env.Password || "";
const Database = process.env.Database || "";

export async function connect() {
  const connection = await createPool({
    host: MySQL_Host,
    user: User,
    password: Password,
    database: Database,
  });

  return connection;
}