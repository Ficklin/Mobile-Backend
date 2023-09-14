import { Sequelize } from "sequelize";
import { TaskFactory } from "./task";

const dbName = "taskDB";
const username = "root";
const password = "Password1!";

const sequelize = new Sequelize(dbName, username, password, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

TaskFactory(sequelize);

export const db = sequelize;
