import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "./uploads"); // sending path where i want to upload
    },
    filename: (request, file, callback) => {
        // console.log("file information :",file);
        const fileExt = path.extname(file.originalname); // fileExt = .png
        const filename = file.originalname
            .replace(fileExt, "").split(/[0-9]*/g).join("").split("-").join("")
            .split(" ").join("")
            + `${fileExt}`;
        callback(null, filename); // sending custom file name
    }
});

export const upload = multer({
    
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (request, file, callback) => {
        console.log("file information from multer :", file);
        if (file.mimetype === "image/png") {
            callback(null, true);
        } else {
            callback(new Error("File accepts .png"));
        }
    }
});