import url from "url";
import path from "path";
import dotenv from "dotenv";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathJoin = path.join(__dirname, "./.env");

dotenv.config({ path: pathJoin });

console.log(process.env.NAME);
console.log(typeof process.env.NAME);
