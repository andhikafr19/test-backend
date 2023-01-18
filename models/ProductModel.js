import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Products = db.define('products', {
  name_product:{
    type: DataTypes.STRING
  },
  price:{
    type: DataTypes.INTEGER
  },
  description:{
    type: DataTypes.TEXT
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

export default Products;