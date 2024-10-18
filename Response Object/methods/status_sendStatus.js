const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();

// url -> http://127.0.0.1:3000/subApp/router1/user

app.use("/subApp", subApp);
subApp.use("/router1", router1);

router1.all("/user", (request, response) => {

    // status without send
    // response.status(200);
    // response.send();

    // status with send. send + status
    // response.sendStatus(400);
    response.status(200).send("All are acceptable");

});

app.listen(3000, () => {
    console.log("port 3000 ...");
});