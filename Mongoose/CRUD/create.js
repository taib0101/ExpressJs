import express from "express";
import { collectionModel } from "../Model/model.js";

const router = express.Router();
router.use(express.json());

// create one
/*
    {
        "vehicle": "Plane",
        "name": "BMW",
        "wheel": 4,
        "price": 10000
    }
*/
router.post("/post", async (req, res) => {
    const data = new collectionModel(req.body);
    try {
        await data.save();
        res.status(200).send("insertOne successfully");
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error);
    }
});

router.post("/post/all", async (req, res) => {
    // create many
    // insertMany
    /*
        [
            {
                "vehicle": "Plane",
                "name": "BMW",
                "wheel": 4,
                "price": 10000
            },
            {
                "vehicle": "Plane",
                "name": "BMW",
                "wheel": 4,
                "price": 10000
            }
        ]
    */
    
    try {
        await collectionModel.insertMany(req.body)
        res.status(200).send("insertedMany successfully");
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error);
    }
});

export default router;
