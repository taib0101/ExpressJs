const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();

// url -> http://127.0.0.1:3000/subApp/router1/user

app.use("/subApp",subApp);
subApp.use("/router1",router1);

router1.all("/user",(request,response) => {
    response.setHeader("content-type","application/json");
    
    // send and end method play same role

    // response.send(JSON.stringify({ name : "Taib"}));
    // response.send();

    // response.end(JSON.stringify({ name : "Taib"}));
    // response.end();
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});