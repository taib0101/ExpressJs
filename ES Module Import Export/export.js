import express from "express";
const router = express.Router();

export const EMAIL_HOST = "";
export const EMAIL_PORT = "3000";
export const EMAIL_USER = "";
export const EMAIL_PASSWORD = "";

export const createTask = async (req, res) => {
    res.json({ message: "Created Successfully" });
};

export const readTask = async (req, res) => {
    res.json({ message: "Read Successfully" });
};

export const updateTask = async (req, res) => {
    res.json({ message: "Updated Successfully" });
};

export const deleteTask = async (req, res) => {
    res.json({ message: "Deleted Successfully" });
};

// create task
router.post("/createTask", (req, res) => {
    res.send();
});

// read task
router.get("/readTask", (req, res) => {
    res.send();
});

// update task
router.put("/updateTask", (req, res) => {
    res.send();
});

// delete task
router.delete("/deleteTask", (req, res) => {
    res.send();
});

export default router;