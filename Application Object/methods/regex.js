const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/*

app.use("/subApp", subApp);
subApp.use("/", router);

// method 01:
// subApp.get("*", (request, response) => {
//     response.status(200).send("for all *");
// });

// method 02:
subApp.get("/a*b+c?", (request, response) => {
    response.status(200).send("/a*b+c?");
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});
