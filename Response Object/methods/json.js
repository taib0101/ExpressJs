const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();

// url -> http://127.0.0.1:3000/subApp/router1/user

app.use("/subApp", subApp);
subApp.use("/router1", router1);

router1.all("/user", (request, response) => {
    response.json({
        name : "Taib"
    });
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});