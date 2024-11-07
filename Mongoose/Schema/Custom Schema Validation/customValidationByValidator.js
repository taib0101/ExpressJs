import mongoose, { Schema } from "mongoose";

export const customValidation = new Schema({
    vehicle: {
        type: String,
        require: [true, "require Error"], // validation by object
        lowercase: true, // it makes upper to lower, sanitization
        trim: true, // sanitization

        // this is custom validation by validate
        validate: {
            validator: (value) => {
                console.log("value :", value);
                console.log("value length:",value.length);
                return value.length <= 5; // if it is false, it will go message property
            },
            message: (props) => {
                console.log(`${props} is not valid----------------------title`);
                return `${props} is not valid----------------------title`
            }
        }
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
        validate: {
            validator: (value) => {
                return value >= 10000 && value <= 20000
            },
            message: (props) => {
                console.log("error---------------price");
                return "error---------------price";
            }
        }
    },

    phone: {
        type: String,
        validate: {
            validator: (value) => {
                return /\d{5}-\d{8}/g.test(value);
            },
            message: (props) => {
                console.log("error phone length");
            }
        }
    },

    date: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false }); // _v: 0 will not insert automatically
