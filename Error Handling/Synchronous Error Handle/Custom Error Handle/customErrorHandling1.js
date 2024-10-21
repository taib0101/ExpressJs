const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// main url: http://127.0.0.1:3000

// if there have user has problem like searching url routing problem express will handle this shit automatically
app.use("/subApp", subApp); // url: /subApp
app.use("/router", router); // url: /router
subApp.use("/router", router); // url: /subApp/router

app.get("/", (request, response) => {
    response.send(variable_error); // this is an error, default invisible error middleware will handle it
});

router.get("/", (request, response) => {
    response.send("router done");
});

// this error middleware directly response to client or 
// we can use next("error something") to send invisible error middleware, but this is not better practice
app.use((error, request, response, next) => {
    console.log("error custom handle message :", error.message);
    if(error.message) {
        response.status(500).send(error.message);
    } else {
        response.status(500).send("There was an error");
    }
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});