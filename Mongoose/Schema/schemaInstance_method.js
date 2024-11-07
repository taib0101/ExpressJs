import express from "express";
import mongoose from "mongoose";

const app = express();
const router = express.Router();
app.use(router);

// connect
mongoose.connect("mongodb://taib:1234@127.0.0.1:27017/vehicleDatabase", {
    authSource: "admin"
});

// schema
const schema = new mongoose.Schema({
    vehicle: String,
    name: String,
    price: Number,
    wheel: Number
}, { versionKey: false });

// instance method
schema.methods = {
    findSomething: () => {
        return new mongoose.model("collectionVehicle").find().select({ wheel: 0 });
    }
}

// model
const collection = mongoose.model("collectionVehicle", schema);

// CRUD
router.get("/get", async (req, res) => {
    try {
        let data = await schema.methods.findSomething();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.listen(3000, () => {
    console.log("Port 3000..");
});