import mongoose from "mongoose";

// connect
// method 01: 
// with database authentication
// connect
export const connect = mongoose.connect("mongodb://taib:1234@127.0.0.1:27017/vehicleDatabase", {
    authSource: "admin"
});

// method 02:
// without database authentication
// mongoose.connect("mongodb://127.0.0.1:27017/products", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });