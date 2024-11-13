import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/*
    we can generate symmetric and asymmetric both token.
    jwt.sign(payload, secret, options)

    Symmetric Encryption -> jwt.verify(previousToken, secret)

    Asymmetric Encryption -> jwt.sign(previousToken, publicKey, options)

    you can use symmetric and asymmetric with synchronous or asynchronous, better practice is using Asymmetric Encryption

    audiance, issuer, jwtid, subject is a options

    jwt.verify(generatedToken, publicKey, { audience: 'my-app-client-id', issuer: 'my-auth-service', jwtid: 'user-token-id', subject: 'user-unique-id' });
*/

const payload = {
    name: "Taib",
    age: 30
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let filePath = path.join(__dirname, "../private.key");
const privateKey = fs.readFileSync(filePath);

const token = jwt.sign(payload, privateKey, {
    algorithm: "RS512",
    audience: "my-app-client-id",
    issuer: "my-auth-service",
    subject: "user-unique-id",
    jwtid: "user-token-id"
}); //generated token

filePath = path.join(__dirname, "../public.key");
const publicKey = fs.readFileSync(filePath);

// verify token with Asymmetric Encryption and Synchronous
const verify1 = jwt.verify(token, publicKey, {
    audience: 'my-app-client-id',
    issuer: 'my-auth-service',
    jwtid: 'user-token-id'
});
console.log("verify1 :", verify1);

// verify token with Asymmetric Encryption and Asynchronous
const verifyFunction = async () => {
    try {
        const verify2 = await jwt.verify(token, publicKey, {
            audience: 'my-app-client-id',
            issuer: 'my-auth-service',
            jwtid: 'user-token-id',
            subject: 'user-unique-id'
        });
        console.log("verify2 :", verify2);
    } catch (error) {
        console.log("Error Message :", error.message);
    }
};



verifyFunction();

// Symmetric Synchronous
const token1 = jwt.sign(payload, "shared a secret key", {
    audience: "my-app-client-id",
    issuer: "my-auth-service",
    subject: "user-unique-id",
    jwtid: "user-token-id"
}); // generated token

const verify3 = jwt.verify(token1, "shared a secret key", {
    audience: 'my-app-client-id',
    issuer: 'my-auth-service',
    jwtid: 'user-token-id',
    subject: 'user-unique-id'
});
console.log("verify3 :", verify3);

// same as for Asynchronous