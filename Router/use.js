const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/router/user?id=23423424

// router are similar to app but there have different see the js file different of app and router

app.use("/subApp", subApp);
subApp.use("/router", router);

router.use(express.json()); // you can make any router.use as like app.use
router.all("/user", (request, response) => {
    console.log(request.body);
    response.status(200).json(request.body);
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});