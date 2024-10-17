const express = require("express");
const app = express();

app.use(express.urlencoded({
    type: "application/x-www-form-urlencoded"
}));
// or
// app.use(express.urlencoded());


app.get("/", (request, response) => {
    console.log(request.body);
    response.send("this is get");
});

app.post("/", (request, response) => {
    console.log(request.body);
    // console.log(request.body.age);
    response.send("this is post");
});

app.listen(3000, () => {
    console.log("server port 3000 ...");
}); 