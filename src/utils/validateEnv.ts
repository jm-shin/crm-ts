import { cleanEnv, str, email, json, port } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
  });
}

export default validateEnv;