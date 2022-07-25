import { config } from "dotenv";
config();

const variables = {
    port: process.env.PORT,
}

export default variables;