const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();
// url -> http://127.0.0.1:3000/subApp/router1/user?id=23423424

app.use("/subApp", subApp);
subApp.use("/router1", router1);

router1.get("/user", (request, response) => {
    console.log("ip :",request.ip);
    response.send(request.ip);
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});