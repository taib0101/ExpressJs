/*
    // for sub app
    1.A sub-application is a fully functional Express application 
    that can be mounted on a specific path within a parent app.

    2.It can have its own middleware, routes, and settings.
    
    3.Useful when building modular, large-scale applications with different components.

    4. Example: For creating a microservice structure or splitting a 
    large app into isolated parts (e.g., /admin, /api as sub-apps).

    // first code for sub app
    const express = require("express");
    const app = express();
    const subApp = express();
    app.use("/subApp",subApp);

    // for router

    1. A router is a lightweight way to organize routes within an Express app.

    2. Routers are used to group related route handlers and middleware, 
    but they are not standalone apps.

    3. Example: When you need to organize route logic (e.g., /users or /products routes)

    // second code for router
    const express = require("express");
    const app = express();
    const router = express.router();
    app.use("/route",router);


Purpose:
1.First snippet: express() is intended to create an Express application, not a router. 
While it technically works, it's not the best approach.
2.Second snippet: express.Router() is explicitly meant to create a router object to 
handle routes in a modular way.

Usage:
1.First snippet: You are essentially creating another Express app 
(though it can be used to route, it's not ideal).

2.Second snippet: You are creating a dedicated router object, 
which is more efficient and clear when you want to organize routes 
for a specific part of the application.

Best Practice:
Second snippet is the preferred and correct way to define modular routing using express.Router().


*/
