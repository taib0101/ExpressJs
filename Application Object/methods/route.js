const app = require("express")();

app.route("/")
    .get((request,response) => {
        console.log("from get method");
        response.send("from get method");
    })
    .post((request,response) => {
        console.log("from put method");
        response.send("from put method");
    })
    .put((request,response) => {
        console.log("from post method");
        response.send("from post method");
    })
    .delete((request,response) => {
        console.log("from delete method");
        response.send("from delete method");
    });

app.listen(3000, () => {
    console.log("Listen port 3000 ...");
});

// those are more complex use app.route