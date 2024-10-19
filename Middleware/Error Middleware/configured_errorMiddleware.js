const express = require("express");
const app = express();
const subApp = express();
const router = express.Router();

// url -> http://127.0.0.1:3000/subApp/router/user

// this middleware work at backend by default
app.use("/subApp", subApp);
subApp.use("/router", router);

const errorMiddleware = (check) => {
    return (request, response, next) => {
        console.log("worked");
        
        if (check.log) {
            next();
        } else {
            throw new Error("error occur");
        }
    }
};

router.use(errorMiddleware({ log: true }));
// router.use(errorMiddleware({ log: false }));

router.get("/user", (request, response) => {
    response.send();
});


app.listen(3000, () => {
    console.log("port 3000 ...");
});