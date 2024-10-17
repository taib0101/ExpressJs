// go to terminal
// ~/$npm install ejs

const express = require("express");
const app = express();

app.set("view engine","ejs");
app.use(express.json());

// after search this url it will render html as ejs file render
app.route("/render/about")
    .get((request,response) => {
        response.render("about"); // default root folder is views , so about are in views
    })
    .post((request,response) => {
        response.render("about"); // default root folder is views , so about are in views
    })
    .put((request,response) => {
        response.render("about"); // default root folder is views , so about are in views
    })
    .delete((request,response) => {
        response.render("about"); // default root folder is views , so about are in views
    });

app.listen(3000,() => {
    console.log("Listen port 3000 ...");
});