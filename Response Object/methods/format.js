const express = require("express");
const app = express();
const subApp = express();
const router1 = express.Router();

// url -> http://127.0.0.1:3000/subApp/router1/user

app.set("view engine", "ejs");
app.use("/subApp", subApp);
subApp.use("/router1", router1);

router1.all("/user", (request, response) => {

    // format happens when request header includes "accept" keys and values are
    // "text/html", "application/json", "text/plain"

    response.format({
        "text/plain": () => {
            response.send("format plain okay");
        },
        "text/html": () => {
            response.render("about");
        },
        "application/json": () => {
            response.json({
                name: "Taib"
            })
        },
        default: () => {
            response.status(400).send("kharap request");
        }
    });

});

app.listen(3000, () => {
    console.log("port 3000 ...");
});