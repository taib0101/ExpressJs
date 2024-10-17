const express = require("express");
const app = express();
const blog = express();
const adminBlog = express();

app.use("/blog",blog); // "/bog" will hit the blog router
blog.use("/admin",adminBlog); // "/admin" will hit the adminBlog router

console.log("Mount path of app router",app.mountpath); // output : "/"
console.log("Mount path of blog router",blog.mountpath); // output : "/blog"
console.log("Mount path of adminBlog router",adminBlog.mountpath); // output : "/admin"

console.log();

console.log("details path of app router :",app.path()); // output : ""
console.log("details path of blog router :",blog.path()); // output : "/blog"
console.log("details path of adminBlog router :",adminBlog.path()); // output : "/blog/admin"
