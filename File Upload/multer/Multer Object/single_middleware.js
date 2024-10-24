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
        console.log("file information :",file);
        const fileExt = path.extname(file.originalname); // fileExt = .png
        const filename = file.originalname
            .replace(fileExt, "").split(/[0-9]*/g).join("").split("-").join("")
            .split(" ").join("")
            + `${fileExt}`;
        callback(null, filename); // sending custom file name
    }
});

const upload = multer({
    
    storage: storage,

    fileFilter: (request, file, callback) => {
        console.log("file information :", file);
        if (file.mimetype === "image/png") {
            callback(null, true);
        } else {
            callback(new Error("File accepts .png"));
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

// for single file
// <input type="file" name="image">
router.post("/", upload.single("image"), (request, response) => {
    response.send("files uploaded successfully");
    console.log("sent header form post method :", response.headersSent);
});

app.listen(3000, () => {
    console.log("port 3000 ...");
});

