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
// <input type="file" name="image" multiple>
// you can do request.files and request.files.length for upload.fields() , not for upload.array
router.post("/", upload.array("image", 3), (request, response) => {
    console.log("request files :", request.files);
    console.log("request files length :", request.files.length);

    response.send("files uploaded successfully");
    console.log("sent header form post method :", response.headersSent);
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});

