import {
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export class Task extends Model<
  InferAttributes<Task>,
  InferCreationAttributes<Task>
> {
  declare taskId: number;
  declare title: string;
  declare completed: boolean;
}

export function TaskFactory(sequelize: Sequelize) {
  Task.init(
    {
      taskId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      completed: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      freezeTableName: true, //prevent Sequelize from pluralize the table name by adding an 's' to the end
      tableName: "task",
      sequelize,
    }
  );
}
