const express = require("express");
const app = express();

// when you hit this url: http://127.0.0.1/ . that means it points to static folder
// and search for index.html as root file, if not it response not found
// we can change index.html file name and make as root by using index properties

app.use(express.static(`${__dirname}/static/`,{
    index: "home.html"
}));


app.get("/", (request, response) => {
    console.log(request.body);
    response.send("this is get");
});

app.post("/", (request, response) => {
    console.log(request.body);
    // console.log(request.body.age);
    response.send("this is post");
});

app.listen(3000, () => {
    console.log("server port 3000 ...");
}); 