import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/*
    we can generate symmetric and asymmetric both token.
    jwt.sign(payload, secret, options)

    Symmetric Encryption -> jwt.sign(payload, secret, options)

    Asymmetric Encryption -> jwt.sign(payload, privateKey, options)

    you can use symmetric and asymmetric with synchronous or asynchronous, better practice is using Asymmetric Encryption

    // Expire time
    const generate1 = jwt.sign(payload, privateKey, { algorithm: "RS512", expiresIn: "1.5h" });
*/

const payload = {
    name: "Taib",
    age: 30
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../private.key");

const privateKey = fs.readFileSync(filePath);

// Asymmetric Encryption
// generate for user json web token by Synchronous
// const generate1 = jwt.sign({ name: "Taib", age: 30, exp: Math.floor(Date.now() / 1000) + (60 * 60) }, privateKey, { algorithm: "RS512" }); // Method 01
// const generate1 = jwt.sign(payload, privateKey, { algorithm: "RS512", expiresIn: 60 * 60 }); // Method 02
// const generate1 = jwt.sign(payload, privateKey, { algorithm: "RS512", expiresIn: "1h" }); // Method 03
const generate1 = jwt.sign(payload, privateKey, {
    algorithm: "RS512",
    expiresIn: "1.5h"
});
console.log("Generated key Synchronous :", generate1);

// generate for user json web token by Asynchronous
const generateFunction = async () => {
    try {
        const generate2 = await jwt.sign(payload, privateKey, {
            algorithm: "RS512",
            expiresIn: "1.5h"
        });
        console.log("\nGenerated key Asynchronous :", generate2);
    } catch (error) {
        console.log("Error Message:", error.message);
    }
};


generateFunction();

console.log();
// Symmetric Encryption Synchronous
const generate3 = jwt.sign(payload, "shared one secret key", { expiresIn: "1.5h" });
console.log("generate symmetric key :", generate3);

// Symmetric Encryption Asynchronous, same as above