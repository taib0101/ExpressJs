const express = require("express");
const app = express();

// param method work for this type of url "http://127.0.0.1:3000/search/1"
// // method 01:

app.param("id",(request,response,next,value) => {
    console.log("id :",value);
    request.details = value; // insert value to request
    next(); // pass to app.get method callback
});

// first argument send to param method as middleaware
app.get("/search/:id",(request,response) => {
    console.log(request.details);
    response.send("params");
});

// param method work for this type of url "http://127.0.0.1:3000/1/2"
// method 02:

// app.param(["id","roll"],(request,response,next,value) => {
//     console.log("id :",value);
//     next();
// });

// // first argument send to param method as middleaware
// app.get("/:id/:roll",(request,response) => {
//     response.send("params");
// });

// query work this type of url "127.0.0.1:3000/search?id=1234"
// app.get("/search",(request,response) => {
//     console.log("query :",request.query);
//     response.send("params");
// });

app.listen(3000,() => {
    console.log("Listen port 3000 ...");
}); 