const express = require("express");
const app = express();
const admin = express();

// url -> http://127.0.0.1:3000/admin/1234

app.use("/admin", admin);

// method 04:
admin.param((params, options) => (request, response, next, value) => {
    if (parseInt(value) === options) {
        next();
    } else {
        response.status(404).send("not found");
    }
})

admin.param("id", 12);

admin.all("/:id", (request, response) => {
    response.status(200).send("Founded");
});

app.listen(3000, () => {
    console.log("Listening port 3000 ...");
});