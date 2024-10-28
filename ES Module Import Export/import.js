import express from "express";
import * as path from "path";
import router from "./export.js";
import { createTask } from "./export.js";
import * as taskController from "./export.js";
import {
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_PASSWORD,
    EMAIL_USER
} from "./export.js";

console.log("Email port :", EMAIL_PORT);

console.log("createTask :", createTask);

console.log("taskController :", taskController);

console.log("router :", router);