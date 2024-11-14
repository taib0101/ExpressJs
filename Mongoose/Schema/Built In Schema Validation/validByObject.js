import mongoose, { Schema } from "mongoose";

export const schemaValidationByObject = new Schema({
    vehicle: {
        type: String,
        required: {
            values: true,
            message: "{VALUE} is done"
        }, // validation by object
        lowercase: true, // it makes upper to lower, sanitization
        trim: true // sanitization
    },

    name: {
        type: String,
        minlength: [3, "error in minlength"], // doesn't support validation object
        enum: {
            values: ["BMW", "Honda"],
            message: "{VALUE} is done"
        } // validation by object
    },

    wheel: {
        type: Number,
        enum: {
            values: [4, 2],
            message: "{VALUE} is done"
        } // validation by object
    },

    price: {
        type: Number,
        min: [10000, "min error"],
        max: [20000, "max error"]
    },

    date: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false }); // _v: 0 will not insert automatically
