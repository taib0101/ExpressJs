// npm install cookie-parser

const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();
const cookieParsed = require("cookie-parser");

// url -> http://127.0.0.1:3000/subApp/router/user


// this middleware work at backend by default
app.use("/subApp", subApp);
subApp.use("/router", router);

// third aprty middleware
app.use(cookieParsed());

router.get("/user", (request, response) => {
    console.log("okay");
    response.send();
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});