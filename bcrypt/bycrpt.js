// link -> https://www.npmjs.com/package/bcrypt
// $ npm install bcrypt
import bcrypt, { hash, compare } from "bcrypt";

const password = "Hey you, fuck you";
let databasePasswordHash
let saltrounds = 10; // give this in environment file


const comaparePassword = async () => {
    try {
        const userGivenPasswordFromSignin = "Hey you, fuck you";
        // console.log("bro");
        let result = await bcrypt.compare(userGivenPasswordFromSignin, databasePasswordHash);
        console.log("result: ", result);
    } catch (error) {
        console.log(error.message);
    }
}


const makePasswordHash = async () => {
    try {
        let newHash = await hash(password, saltrounds);
        databasePasswordHash = newHash;
        console.log("database password hash: ",databasePasswordHash);
        await comaparePassword();
    } catch (error) {
        console.log(error.message);
    }
}

makePasswordHash();
