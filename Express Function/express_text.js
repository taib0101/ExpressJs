const express = require("express");
const app = express();

app.use(express.text({
    type: "text/plain"
}));
// or
// app.use(express.text());


app.get("/", (request, response) => {
    console.log(request.body);
    response.send("this is get");
});

app.post("/", (request, response) => {
    console.log(request.body);
    response.send("this is post");
});

app.listen(3000, () => {
    console.log("server port 3000 ...");
}); 