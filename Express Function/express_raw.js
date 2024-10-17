const express = require("express");
const app = express();

app.use(express.raw({
    type: "application/octet-stream"
}));
// or
// app.use(express.raw());


app.get("/", (request, response) => {
    console.log(request.body);
    response.send("this is get");
});

app.post("/", (request, response) => {
    console.log(request.body);
    console.log(request.body.toString());
    response.send("this is post");
});

app.listen(3000, () => {
    console.log("server port 3000 ...");
});