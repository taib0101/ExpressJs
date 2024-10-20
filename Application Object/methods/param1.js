const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/user/1234/4321


// this middleware work at backend by default
app.use("/subApp", subApp);
subApp.use("/router", router);

// app.param middleware
// method 01:
// subApp.param("id", (request, response, next, value1) => {
//     console.log("id :", value1);
//     next();
// });
subApp.get("/user/:id",(request,response) => {
    response.send();
});

// method 02:
// subApp.param(["id", "roll"], (request, response, next, value) => {
//     console.log("id :", value);
//     next();
// });

// method 03:
subApp.param("id", (request, response, next, value) => {
    console.log("id :", value);
    next();
});
subApp.param("roll", (request, response, next, value) => {
    console.log("roll :", value);
    next();
});

subApp.get("/user/:id/:roll", (request, response) => {
    response.send();
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});
