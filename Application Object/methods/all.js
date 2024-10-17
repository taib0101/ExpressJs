const express = require("express");
const app = express();
const admin = express();

app.use(express.json()); //best practice
// app.all means accepting all method not for HEAD method
app.all("/",(request,response) => {
    console.log("app :",request.body);
    response.send("from / path")
});

app.use("/admin",admin);
// admin.use(express.json());

admin.all("/dashboard",(request,response) => {
    console.log("admin :",request.body);
    response.send("from /admin/dashboard path")
});

app.listen(3000,() => {
    console.log("Listening port 3000 ...");
});