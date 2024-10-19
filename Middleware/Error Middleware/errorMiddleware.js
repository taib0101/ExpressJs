const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/router/user

// this middleware work at backend by default
app.use("/subApp", subApp);
subApp.use("/router", router);

const errorMiddleware = (error, request, response, next) => {
    console.log(error.message);
    response.status(500).send("Server Error");
};

// use those different router or app error, make sure it above of that
// app.use(errorMiddleware) and router.get()
app.use(errorMiddleware);
// subApp.use(errorMiddleware);
// router.use(errorMiddleware);

const middleWare01 = (request, response, next) => {
    // throw "error";
    throw new Error("error occur"); // it pass to error handler
};

router.get("/user", middleWare01, (request, response) => {
    console.log("okay");
    response.send();
});

// use those when same router or app get error, make sure it under of that
// like router.get() and under router.use(errorMiddleware)
// app.use(errorMiddleware);
// subApp.use(errorMiddleware);
// router.use(errorMiddleware);

app.listen(3000, () => {
    console.log("port 3000 ...");
});