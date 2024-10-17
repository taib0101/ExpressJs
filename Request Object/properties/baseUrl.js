const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();
const router2 = express.Router();

// baseUrl refers to the URL path at which a router is "mounted" during a request

// we can get baseUrl through sub app's and router's request 

// number 01: url -> http://127.0.0.1:3000/user/person

app.use("/user",router1); // "/user" is mount not mountPath

router1.get("/person",(request,response) => {
    console.log("Base URL of router1 is :",request.baseUrl); // output : /user
    response.send(request.baseUrl);
});

// number 02: url -> http://127.0.0.1:3000/admin/man/bro?filter=2342

app.use("/admin",subApp); // "/admin" is mountPath
subApp.use("/man",router2); // "/man" is mount

router2.get("/bro",(request,response) => {
    console.log("Base Url of router2 is :",request.baseUrl); // output : /admin/man
    response.send(request.baseUrl);
});


app.listen(3000,() => {
    console.log("Listen port 3000 ...");
});