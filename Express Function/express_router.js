const express = require("express");
const app = express();

/*
    1. A router is a lightweight way to organize routes within an Express app.

    2. Routers are used to group related route handlers and middleware, 
    but they are not standalone apps.

    3. Example: When you need to organize route logic (e.g., /users or /products routes)

*/

// ("/Foo and /foo are different routes")
const router1 = express.Router({
    caseSensitive: true
}); 
// you can use this for it app.enable("case sensitive routing")

// method 01:
app.use("/user",router1);

router1.get("/about", (request, response) => {
    console.log(request.body);
    response.send("this is get");
});

const router2 = express.Router({
    caseSensitive: false
})

// method 02:
app.use(router2);

// it will work both path "/home" and "/Home" because caseSensitive: false
router2.post("/home", (request, response) => {
    console.log(request.body);
    response.send("this is post");
});

app.listen(3000, () => {
    console.log("server port 3000 ...");
}); 
