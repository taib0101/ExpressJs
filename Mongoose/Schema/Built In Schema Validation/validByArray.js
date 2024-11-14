import mongoose, { Schema } from "mongoose";

export const schemaValidationByArray = new Schema({
    vehicle: {
        type: String,
        required: [true, "required error"], // array validation
        lowercase: true, // it makes upper to lower, sanitization
        trim: true // sanitization
    },

    name: {
        type: String,
        minlength: [3, "error for min length"],
        enum: ["BMW", "Honda"] // name will around BMW or Honda. else it give error, better for make object validation
    },

    wheel: {
        type: Number,
        enum: [4, 2]
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
