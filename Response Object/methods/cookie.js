const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();

// url -> http://127.0.0.1:3000/subApp/router1/user

app.set("view engine", "ejs");
app.use("/subApp", subApp);
subApp.use("/router1", router1);

router1.all("/user", (request, response) => {

    response.cookie("name", "taib", {
        path: "/admin/bro"
    }); // taking argument as like call, apply, bind function

    // more options for response.cookie(name, value [, options])
    // res.cookie('session', '12345', {
    //     httpOnly: true,     // Accessible only by the web server
    //     secure: true,       // Cookie will be sent over HTTPS only
    //     maxAge: 3600000,    // Expires in 1 hour
    //     sameSite: 'strict', // Strict SameSite policy
    //     path: '/',          // Cookie is accessible across the entire site
    // });

    response.send();
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});