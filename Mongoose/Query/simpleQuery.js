import express from "express";
import mongoose, { Schema } from "mongoose";

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

/*
    // we learn static in OOP, if i define a static method in Class
    // we can call that that method as that CLass name like
    // let person = new Person() , Person.staticMethod(), if you want to get more information
    // go to my Javascript/OOP/static_method.js
*/

// static method
schema.statics = {
    findSomething: function () {
        return this.find().select({ wheel: 0 });
    }
}

// query
// it helps us to make chain method
schema.query = {
    queryHelper: function (namee) {
        return this.find({ name: new RegExp(namee, "i")});
    }
}

// model
const Collection = mongoose.model("collectionVehicle", schema);

// CRUD
router.get("/get", async (req, res) => {
    try {
        // here is chain method .find().queryHelper()
        let data = await Collection.find().queryHelper("Honda");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.listen(3000, () => {
    console.log("Port 3000..");
});