const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/router/user

// router are similar to app but there have different see the js file different of app and router

app.use("/subApp", subApp);
subApp.use("/router", router);

router.route("/user")
    .get((request,response) => {
        response.status(200).send("get")
    })
    .post((request,response) => {
        response.status(200).send("post")
    })
    .put((request,response) => {
        response.status(200).send("put")
    })
    .delete((request,response) => {
        response.status(200).send("delete")
    });
app.listen(3000,() => {
    console.log("port 3000 ...");
});