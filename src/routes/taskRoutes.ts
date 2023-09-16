import { Router } from "express";
import {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController";

const router = Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.get("/:taskId", getTask);

router.put("/:taskId", updateTask);

router.delete("/:taskId", deleteTask);

export default router;
