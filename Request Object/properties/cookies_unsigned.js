// first install cookie-parser packages
// $ npm install cookie-parser
// set cookie on request header like "Cookie" : "userCookie=12345"

// cryptographic cookies are signed cookies

const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();

const cookieParsed = require("cookie-parser"); // it returns a function

// url -> http://127.0.0.1:3000/subApp/router1/user?id=23423424
app.use(cookieParsed());
app.use("/subApp", subApp);
subApp.use("/router1", router1);


router1.get("/user", (request, response) => {
    console.log("cookies :",request.cookies);
    response.send(request.cookies);
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});