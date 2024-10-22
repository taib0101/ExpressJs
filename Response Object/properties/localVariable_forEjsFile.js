const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();

// url -> http://127.0.0.1:3000/subApp/router1/user

app.use("/subApp",subApp);
subApp.use("/router1",router1);

// setting view engine for ejs file
app.set("view engine","ejs");
// ejs are contains in views directory by default

// locals are use for rendering ejs file , see example below
router1.all("/user",(request,response) => {
    // setting local variable for ejs file
    // at ejs file i wrote this <%= name %> for get the local variable
    
    response.render("pages/about",{
        name: "Variable"
    });
    response.send();
});

app.listen(3000,() => {
    console.log("port 3000 ...");
});