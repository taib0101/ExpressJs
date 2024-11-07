import mongoose, { Schema } from "mongoose";

export const withoutValidation = new Schema({
    vehicle: String,
    name: String,
    wheel: Number,
    price: Number,

    date: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false }); // _v: 0 will not insert automatically
