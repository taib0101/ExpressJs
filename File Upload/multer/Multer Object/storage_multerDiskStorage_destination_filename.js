import express from "express";
import multer from "multer";
import path from "path";

const app = express();
const router = express.Router();

/*
    file information : {
        fieldname: 'image',
        originalname: 'Screenshot from 2024-10-23 00-59-46.png',
        encoding: '7bit',
        mimetype: 'image/png'
    }
*/

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

// if you want to see more details, see fileFilter
const upload = multer({
    
    storage: storage,

    fileFilter: (request, file, callback) => {
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

router.get("/", (request, response) => {
    response.render("index");
    console.log("sent header form get method :", response.headersSent);
});

router.post("/", upload.fields([
    { name: "image", maxCount: 3 },
    { name: "pdf", maxCount: 2 }
]), (request, response) => {
    console.log("request file :",request.files);
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

