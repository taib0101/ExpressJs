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

const middleWare02 = (request, response, next) => {
    console.log("middleware 02");
    next();
};


const middleWare03 = (request, response, next) => {
    console.log("middleware 03");
    next();
};

const middleWare04 = (request, response, next) => {
    console.log("middleware 04");
    next();
};

// you can use for app also
router.route("/user")
    .get(middleWare01,(request, response) => {
        console.log("middleware 01");
        response.send();
    })
    .post(middleWare02,(request, response) => {
        console.log("middleware 02");
        response.send();
    })
    .put(middleWare03,(request, response) => {
        console.log("middleware 03");
        response.send();
    })
    .delete(middleWare04,(request, response) => {
        console.log("middleware 04");
        response.send();
    });

app.listen(3000, () => {
    console.log("port 3000 ...");
});