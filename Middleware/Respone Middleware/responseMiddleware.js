const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/router/user

app.use("/subApp", subApp);
subApp.use("/router", router);

const middleWare = (request, response, next) => {
    response.status(200).send("done");
};

router.get("/user", middleWare, (request, response) => {
    // response done added at middleware
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});