import express from "express";
import multer from "multer";
import path from "path";

const app = express();
const router = express.Router();

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "./uploads"); // sending path where i want to upload
    },
    filename: (request, file, callback) => {
        console.log("file information :", file);
        const fileExt = path.extname(file.originalname); // fileExt = .png
        const filename = file.originalname
            .replace(fileExt, "").split(/[0-9]*/g).join("").split("-").join("")
            .split(" ").join("")
            + `${fileExt}`;
        callback(null, filename); // sending custom file name
    }
});

// upload gets multer's returned middleware
const upload = multer({

    storage: storage,

    fileFilter: (request, file, callback) => {
        console.log("file information :", file);
        if (file.fieldname === "image") {
            if (file.mimetype === "image/png") {
                callback(null, true);
            } else {
                callback(new Error("File accepts .png"));
            }
        } else {
            if (file.mimetype === "application/pdf") {
                callback(null, true);
            } else {
                callback(null, false);
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
router.post("/", upload.fields([
    { name: "image", maxCount: 3 },
    { name: "pdf", maxCount: 2 }
]), (request, response) => {
    console.log("request files :", request.files);
    console.log("request images files length :",request.files["image"].length);
    
    response.send("files uploaded successfully");
    console.log("sent header form post method :", response.headersSent);
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});

