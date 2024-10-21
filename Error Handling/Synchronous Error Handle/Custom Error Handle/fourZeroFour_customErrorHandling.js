const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// main url: http://127.0.0.1:3000

// if there have user has problem like searching url routing problem express will handle this shit automatically
app.use("/subApp", subApp); // url: /subApp
app.use("/router", router); // url: /router
subApp.use("/router", router); // url: /subApp/router

// try this url : http://127.0.0.1:3000/admin
app.get("/", (request, response) => {
    response.send("app done");
});

router.get("/", (request, response) => {
    response.send("router done");
});

// 404 error handling
app.use((request, response, next) => {
    // response.status(404).send("Requested URL not found");
    next("Requested URL not found"); // it send to error custom handle middleware
    // if you use response.status(404).send("Requested URL not found"), no need to use next
});

app.use((error, request, response, next) => {
    console.log("error custom handle message :", error.message);
    if (error.message) {
        response.status(500).send(error.message);
    } else {
        response.status(404).send("There was an error");
    }
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});