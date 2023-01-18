import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Profile = db.define('user_detail', {
  first_name:{
    type: DataTypes.STRING
  },
  last_name:{
    type: DataTypes.STRING
  },
  address:{
    type: DataTypes.STRING
  },
  gender:{
    type: DataTypes.STRING
  },
  image:{
    type: DataTypes.STRING
  }
},{
  freezeTableName:true
});

(async () => {
  await db.sync();
})();

export default Profile;