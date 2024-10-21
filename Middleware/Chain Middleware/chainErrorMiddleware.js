const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// chain middleware functions in array
app.get("/", [
    (request, response, next) => {
        setTimeout(() => {
            try {
                first_error;
                second_error;
            } catch (error) {
                next("There was in error in chain");
            }
        }, 500);
        // third_error;
    }
]);

// 404 error
app.use((request, response) => {
    response.status(404).send("shitt not found");
});

app.use((error, request, response, next) => {
    if (!response.headersSent) {
        if (error.message) {
            response.status(500).send(error.message);
        } else {
            response.status(500).send("There was an error bro")
        }
    } else {
        next("There was an error")
    }
});

app.listen(3000, () => {
    console.log("port 3000 ...");
})