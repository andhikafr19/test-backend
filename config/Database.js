import { Sequelize } from "sequelize";

const db = new Sequelize('test-backend', 'root', '', {
  host: "localhost",
  dialect: "mysql"
});

export default db;