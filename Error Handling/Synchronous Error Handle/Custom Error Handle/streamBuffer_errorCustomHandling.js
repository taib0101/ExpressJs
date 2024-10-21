const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// main url: http://127.0.0.1:3000

// if there have user has problem like searching url routing problem express will handle this shit automatically
app.use("/subApp", subApp); // url: /subApp
app.use("/router", router); // url: /router
subApp.use("/router", router); // url: /subApp/router

// this is the sample example of stream buffer, and this is not actual stream buffer
// i write this code to understand if i have problem of middle streaming
app.get("/", (request, response) => {
    for(let i = 1; i <= 10; ++i) {
        if(i === 6) {
            next("There has an error");
        } else {
            response.write(i.toString()); // it send header
        }
    }
});

router.get("/", (request, response) => {
    response.send("router done");
});

// 404 error handling
app.use((request, response, next) => {
    response.status(404).send("Requested URL not found");
});

// this is for handle stream buffer error handle or any error handle
app.use((error, request, response, next) => {
    console.log("error custom handle message :", error.message);
    console.log("headers Sent :",response.headersSent);

    // we are using it because client cannot take multiple header
    // once header sent it will not sent
    if(!response.headersSent) {

        if (error.message) {
            response.status(500).send(error.message);
        } else {
            response.send("There was an error"); // it goes error default invisible middleware 
        }

    } else {
        next("There has an error");
    }
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});