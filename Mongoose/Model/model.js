import mongoose, { model } from "mongoose";
import selector from "../Schema/selectorValidation.js";

export const collectionModel = new model("collectionVehicle", selector.validation);