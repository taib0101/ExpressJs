const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

const firstMiddleware = (request, response, next) => {
    console.log("First Middleware");
    next();
};

const secondMiddleware = (request, response, next) => {
    console.log("Second Middleware");
    next();
};

const thirdMiddleware = (request,response,next) => {
    console.log("Third Middleware");
    next();
};


app.get("/", [firstMiddleware, secondMiddleware, thirdMiddleware], (request, response) => {
    response.send();
});

app.listen(3000,() => {
    console.log("port 3000 ...");
})