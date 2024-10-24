import express from "express";
import multer from "multer";

const app = express();
const router = express.Router();

// upload gets multer's returned middleware
const upload = multer({
    dest: "./uploads" // dist property
});

app.use(router);

app.set("view engine", "ejs");

// render a ejs file
router.get("/", (request, response) => {
    response.render("index");
    console.log("sent header form get method :", response.headersSent);
});

// for single file
// <input type="file" name="image">
router.post("/", upload.single("image"), (request, response) => {
    response.send("files uploaded successfully");
    console.log("sent header form post method :", response.headersSent);
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});
