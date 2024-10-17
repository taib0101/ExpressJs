const express = require("express");
const app = express();
const admin = express();

app.get("/",(request,response) => {
    response.send("form / path");
});

app.use("/admin",admin);

admin.on("mount", (parent) => {
    console.log("parent :",parent); // refers to parent like app
});

admin.use(express.json());
admin.get("/options",(request,response) => {
    console.log(request.body);
    response.send("form /admin path");
});

app.listen(3000,() => {
    console.log("Listen port at 3000 ...");
});