const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/router/1234/4321

// router are similar to app but there have different see the js file different of app and router

app.use("/subApp", subApp);
subApp.use("/router", router);

// method 01:
// router.param("id", (request, response, next, value1) => {
//     console.log("id :", value1);
//     next();
// });
// router.all("/:id", (request, response) => {
//     response.status(200).send("done");
// });

// method 02:
// router.param(["id", "roll"], (request, response, next, value) => {
//     console.log("id :", value);
//     next();
// });

// method 03:
router.param("id", (request, response, next, value) => {
    console.log("id :", value);
    next();
});
router.param("roll", (request, response, next, value) => {
    console.log("roll :", value);
    next();
});


router.all("/:id/:roll", (request, response) => {
    response.status(200).send("done");
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});