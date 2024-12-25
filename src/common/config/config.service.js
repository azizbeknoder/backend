import { config } from "dotenv";
config(); // .env faylini yuklash

export default function configFunction(name) {
  return process.env[name];
}
