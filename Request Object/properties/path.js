const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();
const router2 = express.Router();

// url -> http://127.0.0.1:3000/subApp/router1/user/bro?id=23423424

app.use("/subApp", subApp);
subApp.use("/router1", router1);

router1.get("/user", (request, response) => {
    console.log("request path :",request.path); // output: "/user"
    response.send(request.path);
});

router1.get("/user/bro", (request, response) => {
    console.log("request path :",request.path); // output: "/user/bro"
    response.send(request.path);
});

// url -> http://127.0.0.1:3000/subApp/router1/user/2342?id=23423424
router1.get("/user/:param", (request, response) => {
    console.log("request path :",request.path); // output: "/user/2342"
    response.send(request.path);
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});