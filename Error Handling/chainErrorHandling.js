const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// main url: http://127.0.0.1:3000

app.use("/subApp", subApp); // url: /subApp
app.use("/router", router); // url: /router
subApp.use("/router", router); // url: /subApp/router

// chain custom error middle handle functions by array
app.get("/", [
    (request, response, next) => {
        setTimeout(() => {
            try {
                bro_error;
                bro_multiple_error;
            } catch (error) {
                next("There was an problem and that was :", error);
                console.log("error occur");
            }
        }, 1000);
    }
]);

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
    console.log("headers Sent :", response.headersSent);

    if (!response.headersSent) {

        if (error.message) {
            response.status(500).send(error.message);
        } else {
            response.status(500).send("There was an error bro");
        }

    } else {
        next("There has an error");
    }
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});
