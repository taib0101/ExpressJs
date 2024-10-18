const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();

// url -> http://127.0.0.1:3000/subApp/router1/user

app.use("/subApp",subApp);
subApp.use("/router1",router1);

router1.all("/user",(request,response) => {
    // setHeader and set are same thing
    response.setHeader("content-type","application/json");
    response.set("bro","okay ?");

    response.set("x-custom-header",JSON.stringify({age:30,year:200000}));

    console.log(JSON.parse(response.get("x-custom-header")));
    response.send();
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});