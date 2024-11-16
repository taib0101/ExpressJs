import express from "express";
import { collectionModel } from "../Model/model.js";

const router = express.Router();
router.use(express.json());

// update one
// method 01:
router.put("/put", async (req, res) => {
    try {
        // method 01:
        await collectionModel.updateOne({ vehicle: "plane" }, { $set: { vehicle: "bike" } });

        // method 02:
        // await collectionModel.findOneAndUpdate({ vehicle: "plane" }, { $set: { vehicle: "bike" } });

        /*
            method 03:
            let data = await collectionModel.findOneAndUpdate({ vehicle: "plane" }, { $set: { vehicle: "bike" } });
            data.vehicle = "bike"; // if you apply this and also write this data.save()
            await data.save();
        */

        res.status(200).send("Updated successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// method 02:
// findByIdAndUpdate
router.put("/put/id/:id", async (req, res) => {
    try {
        await collectionModel.findByIdAndUpdate({ _id: req.params.id }, { $set: { vehicle: "bike" } });
        res.status(200).send("Updated successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// method 03:
// updateMany
router.put("/put/all", async (req, res) => {
    try {
        await collectionModel.updateMany({ vehicle: "plane" }, { $set: { vehicle: "bike" } });
        res.status(200).send("Updated successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default router;
