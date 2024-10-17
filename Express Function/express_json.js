const express = require("express");
const app = express();

// if you use this express.json() inside app.use()
// it will help to read request.body . 
// note: it can not read plain/text. so, must set request header Content-Type: "application/json"

// Built-in middleware to parse incoming JSON requests
app.use(express.json({
    type: "application/json"
}));
// or
// app.use(express.json());

app.get("/", (request, response) => {
    console.log(request.body);
    response.send("this is get");
});

app.post("/", (request, response) => {
    console.log(request.body);
    response.send("this is post");
});

app.listen(3000, () => {
    console.log("server port 3000 ...");
});
