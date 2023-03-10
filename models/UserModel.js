import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users', {
  email:{
    type: DataTypes.STRING
  },
  password:{
    type: DataTypes.STRING
  },
  phone_number:{
    type: DataTypes.STRING
  },
  refresh_token:{
    type: DataTypes.TEXT
  }
},{
  freezeTableName:true
});

(async () => {
  await db.sync();
})();

export default Users;