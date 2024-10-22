/*
    subApp -> path(M), mountPath(P), param(M)
    request -> path(P), params(P), baseUrl(P), originalUrl(P)

    M for Method, P for Properties
*/

// url -> http://127.0.0.1:3000/subApp1/subApp2/router/

const express = require("express");
const app = express();
const subApp1 = express();
const subApp2 = express();
const router = express.Router();

app.use("/subApp1", subApp1);
subApp1.use("/subApp2", subApp2);
subApp2.use("/router", router);

// Mount path only for app
console.log("Mount path of app :", app.mountpath); // Output: "/"
console.log("Mount path of subApp2 :", subApp2.mountpath); // Output: "/subApp2"

// Only path for app
console.log("only path of app :", app.path()); // Output: ""
console.log("only path of subApp :", subApp2.path()); // Output: "/subApp1/subApp2" but mount path and path not same think

// url -> http://127.0.0.1:3000/subApp1/subApp2/bro?id=1234
subApp2.get("/bro", (request, response) => {
    console.log("originalUrl of subApp2's /bro :",request.originalUrl);
    console.log("BaseUrl of subApp2's /bro :", request.baseUrl); // means form mount during request
    console.log("Path of subApp :",request.path);
    response.send();
});

// url -> http://127.0.0.1:3000/subApp1/subApp2/router/cro?id=1234
router.get("/cro", (request, response) => {
    console.log("originalUrl of router's /cro :",request.originalUrl); // output: "/subApp1/subApp2/router/cro?id=1234"
    console.log("BaseUrl of router's /cro :",request.baseUrl); // output: "/subApp1/subApp2/router"
    console.log("Path of router :",request.path); // output: "/cro"
    response.send();
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});