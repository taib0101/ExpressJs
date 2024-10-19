const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/router/user

// this middleware work at backend by default
app.use("/subApp", subApp);
subApp.use("/router", router);

const errorMiddleware = (request, response, next) => {
    try {
        // sdfsf
        next();
    } catch {
        next("error");
    }
};

router.get("/user", errorMiddleware,(request, response) => {
    response.send();
});

 
app.listen(3000, () => {
    console.log("port 3000 ...");
});