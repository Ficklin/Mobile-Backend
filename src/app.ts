import express, { NextFunction, Request, Response } from "express";
import { db } from "./models";
import morgan from "morgan";
import taskRoutes from "./routes/taskRoutes";

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/task", taskRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).end();
});

// Syncing database
db.sync().then(() => {
  console.info("Connected to the database!");
});

app.listen(3000);
