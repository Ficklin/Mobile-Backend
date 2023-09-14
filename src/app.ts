import express from "express";
import { db } from "./models";

const app = express();

// Syncing database
db.sync().then(() => {
  console.info("connected to the database!");
});

app.listen(3000);
