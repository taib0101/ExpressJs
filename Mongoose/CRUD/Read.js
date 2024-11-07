import express from "express";
import { collectionModel } from "../Model/model.js";

const router = express.Router();
router.use(express.json());

// read one
// method 01:
// findOne
router.get("/get", async (req, res) => {
    try {
        let data = await collectionModel.findOne({ vehicle: "Plane" });
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).end(error);
    }
});

// read One 
// Method 02:
// findById
router.get("/get/id/:id", async (req, res) => {
    try {
        let data = await collectionModel.findById({ _id: req.params.id });
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).end(error);
    }
});

// method 03:
// read many
// find
router.get("/get/all", async (req, res) => {
    try {
        let data = await collectionModel.find({ vehicle: "Plane" }).select({ wheel: 0, price: 0 }).limit(2).skip(1);
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).end(error);
    }
});

export default router;
