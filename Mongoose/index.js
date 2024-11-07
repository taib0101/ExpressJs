import express from "express";
import { collectionModel } from "./Model/model.js";
import createRoute from "./CRUD/create.js";
import readRoute from "./CRUD/Read.js";
import updateRoute from "./CRUD/Update.js";
import deleteRoute from "./CRUD/Delete.js";

const app = express();

app.use(createRoute);
app.use(readRoute);
app.use(updateRoute);
app.use(deleteRoute);


app.listen(3000, () => {
    console.log("port 3000...");
});