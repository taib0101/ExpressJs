const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();

// url -> http://127.0.0.1:3000/subApp/router1/user/1234?id=23423424

app.use("/subApp", subApp);
subApp.use("/router1", router1);

router1.get("/user/:paramValue", (request, response) => {
    console.log("params :",request.params); // output: "/user"
    console.log("params.paramValue :",request.params.paramValue);
    response.send(request.params);
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});