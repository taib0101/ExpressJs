const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/router/user

// this middleware work at backend by default
// you set n times of custom middleware
app.use("/subApp", subApp);
subApp.use("/router", router);

const middleWare01 = (request, response, next) => {
    console.log("middleware 01");
    next();
};

// you can do this app.all() like that
router.all("/user", middleWare01, (request, response) => {
    console.log("okay");
    response.send();
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});