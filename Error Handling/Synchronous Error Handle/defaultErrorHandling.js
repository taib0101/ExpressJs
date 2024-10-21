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

// express handle error middleware invisibility in synchronous code
// if there have error like type error ,environment variable error, variable error
// it show's default status "500" 

// but better practice is set the error manually
// watch my custom error handling

app.listen(3000, () => {
    console.log("port 3000 ...");
});