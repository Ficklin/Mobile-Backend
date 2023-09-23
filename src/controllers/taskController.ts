import { RequestHandler } from "express";
import { Task } from "../models/task";

export const getAllTasks: RequestHandler = async (req, res, next) => {
  let tasks = await Task.findAll();
  res.status(200).json(tasks);
};

export const createTask: RequestHandler = async (req, res, next) => {
  let newTask: Task = req.body;
  let created = await Task.create(newTask);
  if (created) {
    res.status(201).json(created);
  } else {
    res.status(400).send();
  }
};

export const getTask: RequestHandler = async (req, res, next) => {
  let taskId = req.params.taskId;
  let taskFound = await Task.findByPk(taskId);
  if (taskFound) {
    res.status(200).json(taskFound);
  } else {
    res.status(404).json();
  }
};

export const updateTask: RequestHandler = async (req, res, next) => {
  let taskId = req.params.taskId;
  let newCompleted = req.body.completed; // Get the new completed status from the request body

  let taskFound = await Task.findByPk(taskId);

  if (taskFound) {
    // Update only the 'completed' field
    await Task.update(
      { completed: newCompleted },
      {
        where: { taskId: taskId },
      }
    );
    res.status(200).json();
  } else {
    res.status(400).json();
  }
};

export const deleteTask: RequestHandler = async (req, res, next) => {
  let taskId = req.params.taskId;
  let taskFound = await Task.findByPk(taskId);

  if (taskFound) {
    await Task.destroy({
      where: { taskId: taskId },
    });
    res.status(200).json();
  } else {
    res.status(404).json();
  }
};
