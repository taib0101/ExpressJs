const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();

// url -> http://127.0.0.1:3000/subApp/router1/user?id=23423424

app.use(express.json()); // best practice and it is important for requested body in json format
app.use("/subApp", subApp);
// subApp.use(express.json());
subApp.use("/router1", router1);

router1.get("/user", (request, response) => {
    console.log("body :",request.body);
    response.header("Content-Type","application/json"); // send response as Json
    response.send(JSON.stringify(request.body));
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});
