import express from "express";
import { collectionModel } from "../Model/model.js";

const router = express.Router();
router.use(express.json());

// method 01:
// deleteone
router.delete("/delete", async (req, res) => {
    try {
        await collectionModel.deleteOne({ vehicle: "bike" });
        res.status(200).send("Deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// method 02:
router.delete("/delete/id/:id", async (req, res) => {
    try {
        await collectionModel.findByIdAndDelete({ _id: req.params.id });
        res.status(200).send("Deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// method 03:
// deleteMany
router.delete("/delete/all", async (req, res) => {
    try {
        await collectionModel.deleteMany({ vehicle: "plane" });
        res.status(200).send("Deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default router;
