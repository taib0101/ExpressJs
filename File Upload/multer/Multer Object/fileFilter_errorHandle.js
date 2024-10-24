import express, { request } from "express";
import multer from "multer";

const app = express();
const router = express.Router();

// upload gets multer's returned middleware
const upload = multer({
    dest: "./uploads", // dist property
    fileFilter: (request, file, callback) => {
        /*
            file information : {
                fieldname: 'image',
                originalname: 'Screenshot from 2024-10-23 00-59-46.png',
                encoding: '7bit',
                mimetype: 'image/png'
            }
        */

        console.log("file information :", file);
        if (file.fieldname === "image") {
            if (file.mimetype === "image/png") {
                callback(null, true);
            } else {
                // callback(null,false); // silently express handle this error and it will not show

                // it will show error current tab with new
                callback(new Error("File accepts .png")); // it is error.message and send to error handle middleware
            }
        } else {
            if (file.mimetype === "application/pdf") {
                callback(null, true);
            } else {
                callback(null, false); // silently express handle this error and it will not show
            }
        }
    }
});

app.use(router);

app.set("view engine", "ejs");

// render a ejs file
router.get("/", (request, response) => {
    response.render("index");
    console.log("sent header form get method :", response.headersSent);
});

// for more fields of input file
// <input type="file" name="image" multiple>
// <input type="file" name="pdf" multiple>
// you can do it for single, array
router.post("/", upload.fields([
    { name: "image", maxCount: 3 },
    { name: "pdf", maxCount: 2 }
]), (request, response) => {
    response.send("files uploaded successfully");
    console.log("sent header form post method :", response.headersSent);
});

// error handle middleware
router.use((error, request, response, next) => {
    if (error.message) {
        if (error instanceof multer.MulterError) {
            response.status(500).send("Multer Internal error")
        } else {
            response.status(500).send(error.message);
        }
    } else {
        response.status(200).send("success");
    }
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});

