const express = require("express");
const app = express(); // parent app
const admin = express(); // sub app
const api = express(); // sub app

/*
    1.A sub-application is a fully functional Express application 
    that can be mounted on a specific path within a parent app.

    2.It can have its own middleware, routes, and settings.
    
    3.Useful when building modular, large-scale applications with different components.

    4. Example: For creating a microservice structure or splitting a 
    large app into isolated parts (e.g., /admin, /api as sub-apps).
    
    mountPath is only accepted for application not for router
    
    if you want to see router mount write it request.baseUrl in method
*/

// method 01:
app.use("/admin", admin)
admin.use(express.json());
admin.get("/dashboard", (request, response) => {
    console.log("Mount path of sub app as admin is :", admin.mountpath); // output: mount path is "/admin"
    response.send(`Mount path of sub app as admin is : ${admin.mountpath}`);
});

// method 02:
app.use(api);
api.get("/user", (request, response) => {
    console.log("Mount path of sub app as api is :", api.mountpath); // output: mount path is "/"
    response.send(`Mount path of sub app as api is : ${api.mountpath}`);
});

app.listen(3000, () => {
    console.log("Listening port at 3000 ...");
})
