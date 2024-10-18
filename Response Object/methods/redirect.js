const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();

// url -> http://127.0.0.1:3000/subApp/router1/user

app.use("/subApp", subApp);
subApp.use("/router1", router1);

// redirected here
router1.get("/admin",(request,response) => {
    response.send("Done");
});

// Handle /user route and redirect to /admin
// current path is /subApp/router1/user and redirect path /subApp/router1/admin
router1.all("/user", (request, response) => {
    response.redirect("/subApp/router1/admin"); // this method is better then location method
    response.send();
});

// this is accept for all like app, subapp, router and be careful for path finding

app.listen(3000, () => {
    console.log("port 3000 ...");
});