const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();

// url -> http://127.0.0.1:3000/subApp/router1/user?id=23423424

app.use(express.json({
    type: "application/json"
})); // best practice

app.use("/subApp", subApp);
subApp.use("/router1", router1);

router1.get("/user", (request, response) => {
    // this get method findout request header's value by key
    console.log("request.get('accept') :",request.get("accept"));
    console.log("request.get('content-type') :",request.get("content-type"));
    console.log("request.get('cookie') :",request.get("cookie"));

    response.send();
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});