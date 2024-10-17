const express = require("express");
const app = express();

// Enable case-sensitive routing ("/Foo and /foo are different routes")
/* ("/Foo and /foo are different routes") for it you can use 
    const router1 = express.Router({
        caseSensitive: true
    }); 
*/
app.enable('case sensitive routing');

// Enable strict routing ("/foo" and "/foo/" are different routes)
app.enable('strict routing');

// Enable JSON escaping to help mitigate XSS attacks
app.enable('json escape');

// Enable view caching for performance in production
app.enable('view cache');

console.log("is enable of case sensitive routing :",app.enabled("case sensitive routing"));

// disable is for vice versa
app.disable('case sensitive routing');
app.disable('strict routing');
app.disable('json escape');
app.disable('view cache');

console.log("is disable of case sensitive routing :",app.disabled("case sensitive routing :"));
