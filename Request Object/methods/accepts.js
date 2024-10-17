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
    // request header . Accept : application/json
    // Accept : text/html and etc
    console.log("Accept json :",request.accepts("json"));
    console.log("Accept html :",request.accepts("html"));

    if(request.accepts("html")) {
        response.render("index.html");
    } else {
        response.send("json");
    }
    response.send();
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});