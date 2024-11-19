import mongoose from "mongoose";


mongoose.set('autoIndex', true); // it will create automatically in index array

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "email didn't input"],
        unique: true, // method 01
        index: true, // method 01
        trim: true
    },

    firstName: {
        type: String,
        required: [true, "firstName didn't input"],
        trim: true
    },

    lastName: {
        type: String,
        required: [true, "lastName didn't input"],
        trim: true
    },

    _id: {
        type: String,
        required: true,
        trim: true
    }
}, { versionKey: false });

// creating index
// method 02
schema.index({ firstName: 1 }, { unique: true, background: true, name: "first nam" });

const model = new mongoose.model("persons", schema);

mongoose.connect("mongodb://127.0.0.1/indexPractice");

const push = async () => {

    const data = await model.insertMany([
        {
            _id: 'd4e98a426eb54e3869580471f6d2f9e4',
            email: 'rakib@gmail.com',
            firstName: 'rakib',
            lastName: 'islam',
        },
        {
            _id: 'add687c4e02a8bb00759235426bc0b09',
            email: 'taib@gmail.com',
            firstName: 'taib',
            lastName: 'bro',
        },
        {
            _id: '6dee39ebc511b0f6dffe60e735e7de22',
            email: 'mahi@gmail.com',
            firstName: 'mahi',
            lastName: 'bro',
        }
    ]);
}

push();