import express from "express";
import path from "path";
import { upload } from "./multer.js";
import url from "url";

const app = express();
const router = express.Router();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(router);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public'))); // it use for taking related files like js,css

// main root "/"
router.get("/", (req, res) => {
    res.render("index");
});

// ----------------------------------------------------

// form-data
// "/formData"
router.use("/formData",express.static(path.join(__dirname,"public"))); // "/formData/"
router.get("/formData", (req, res) => {
    res.render("formData");
});

const infoPost = (req, res) => {
    console.log(req.body);
    console.log(req.files);
    console.log("first response done");
    res.send();
};

const infoGet = (req, res) => {
    console.log("second response done");
    res.send("uploaded successfully");
};

// "/formData/info"
router.route("/formData/info")
    .post(upload.array("image", 1), infoPost)
    .get(infoGet);

// --------------------------------------------------------

// x-www-form-urlencoded
// "/urlEncoded"
router.use("/urlEncoded", express.static(path.join(__dirname, 'public'))); // for "/urlEncoded/"
router.get("/urlEncoded", (req, res) => {
    res.render("urlEncoded");
});

const urlEncodedPost = (req, res) => {
    console.log(req.body);
    console.log("first response done");
    res.send();
}

const urlEncodedGet = (req, res) => {
    console.log("second response done");
    res.send("uploaded successfully");
}

router.use(express.urlencoded({ extended: true }));
router.route("/urlEncoded/info")
    .post(urlEncodedPost)
    .get(urlEncodedGet);

// --------------------------------------------------------------

// Raw JSON
// "/json"
router.use("/json", express.static(path.join(__dirname, 'public'))); // for "/json/"
router.get("/json", (req, res) => {
    res.render("rawJSON");
});

const jsonPost = (req, res) => {
    console.log(req.body);
    console.log("first response done");
    res.send();
};

const jsonGet = (req, res) => {
    console.log("second response done");
    res.send("uploaded successfully");
};

router.use(express.json({ extended: true }));
router.route("/json/info")
    .post(jsonPost)
    .get(jsonGet);

app.listen(3001, () => {
    console.log("port 3001 ..");
});