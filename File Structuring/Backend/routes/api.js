import express from "express";
import * as taskController from "../app/controllers/taskController.js";
import { createTask } from "../app/controllers/taskController.js";

const router = express.Router();

// create task
router.post("/createTask", createTask);

// read task
router.get("/readTask", taskController.readTask);

// update task
router.put("/updateTask", taskController.updateTask);

// delete task
router.delete("/deleteTask", taskController.deleteTask);

export default router;
