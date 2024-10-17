const express = require("express");
const app = express();

// we can set variable as we wish
app.locals.variable = "Bro this is taib";
console.log(app.locals.variable);

app.use(express.json());
app.get("/",(request,response) => {
    // console.log(request.body);

    // Inside print the locals variable which i set manually
    console.log("Inside Method :",request.app.locals.variable);
    response.send("okay done")
});

app.listen(3000,() => {
    console.log("Server is listening at port 3000 ....");
});