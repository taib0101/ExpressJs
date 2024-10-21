const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/router/user

// this middleware work at backend by default
app.use("/subApp", subApp);
subApp.use("/router", router);

const middleWare01 = (request, response, next) => {
    // throw "error";
    throw new Error("error occur"); // it pass to error handler
};

router.get("/user", middleWare01, (request, response) => {
    console.log("okay");
    response.send();
});

const errorMiddleware = (error, request, response, next) => {
    console.log(error.message);
    response.status(500).send("Server Error");
};

// better practice is write error handle middleware under the all code
app.use(errorMiddleware);
subApp.use(errorMiddleware);
router.use(errorMiddleware);

app.listen(3000, () => {
    console.log("port 3000 ...");
});