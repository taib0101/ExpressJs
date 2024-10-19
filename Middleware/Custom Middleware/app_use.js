const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/router/user

// 1
const middleWare01 = (request, response, next) => {
    console.log("middleware 01");
    next();
};

// 2
const middleWare02 = (request, response, next) => {
    console.log("middleware 02");
    next();
};

// this middleware work at backend by default
// you set n times of custom middleware
app.use("/subApp",middleWare01,middleWare02, subApp);
subApp.use("/router", router);

// 3
const middleWare03 = (request, response, next) => {
    console.log("middleware 03");
    next();
};

// 4, 5
router.get("/user", middleWare03,middleWare02,middleWare01, (request, response) => {
    console.log("okay");
    response.send();
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});