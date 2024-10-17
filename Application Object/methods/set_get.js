const express = require("express");
const app = express();

// Set environment mode (NODE_ENV)
app.set('env', 'production');

// Enable ETag generation for efficient caching (default is weak ETag)
app.set('etag', 'strong');

// Set JSONP callback name (default is 'callback')
app.set('jsonp callback name', 'myCustomCallback');

// Set JSON replacer (for use with res.json)
app.set('json replacer', null);  // Can provide a custom function

// Set JSON spaces (number of spaces for pretty-printed JSON)
app.set('json spaces', 2);

// Set query parser to 'simple' (based on Node's native querystring parser)
app.set('query parser', 'simple');

// Trust proxy setting (when behind a front-facing proxy)
app.set('trust proxy', true);

// Define the directory for views (HTML templates)
app.set('views', './views');

// Set the view engine (e.g., using Pug for templating)
app.set('view engine', 'ejs');


// Enable view caching for performance in production
if (app.get('env') === 'production') {
    app.enable('view cache');
}

// Define a simple route
app.get('/example', (req, res) => {
    res.send('This is an example route');
});