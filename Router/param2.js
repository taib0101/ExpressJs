const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/router/user/1234/4321

// router are similar to app but there have different see the js file different of app and router

app.use("/subApp", subApp);
subApp.use("/router", router);

// method 04:
router.param((params, options) => (request, response, next, value) => {
    console.log(params);
    if (parseInt(value) === options) {
        next();
    } else {
        response.status(404).send("not found");
    }
})

// app are same thing
router.param("id", 1234);
router.param("roll", 4321);


router.all("/:id/:roll", (request, response) => {
    response.status(200).send("done");
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});