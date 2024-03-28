import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _food from  "./food.js";
import _food_type from  "./food_type.js";
import _like_res from  "./like_res.js";
import _orders from  "./orders.js";
import _rate_res from  "./rate_res.js";
import _restaurant from  "./restaurant.js";
import _sub_food from  "./sub_food.js";
import _user from  "./user.js";
import _user_food from  "./user_food.js";
import _user_in_res from  "./user_in_res.js";

export default function initModels(sequelize) {
  const food = _food.init(sequelize, DataTypes);
  const food_type = _food_type.init(sequelize, DataTypes);
  const like_res = _like_res.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const rate_res = _rate_res.init(sequelize, DataTypes);
  const restaurant = _restaurant.init(sequelize, DataTypes);
  const sub_food = _sub_food.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);
  const user_food = _user_food.init(sequelize, DataTypes);
  const user_in_res = _user_in_res.init(sequelize, DataTypes);

  food.belongsToMany(user, { as: 'user_id_users', through: user_food, foreignKey: "food_id", otherKey: "user_id" });
  restaurant.belongsToMany(user, { as: 'user_id_user_user_in_res', through: user_in_res, foreignKey: "res_id", otherKey: "user_id" });
  user.belongsToMany(food, { as: 'food_id_foods', through: user_food, foreignKey: "user_id", otherKey: "food_id" });
  user.belongsToMany(restaurant, { as: 'res_id_restaurants', through: user_in_res, foreignKey: "user_id", otherKey: "res_id" });
  orders.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(orders, { as: "orders", foreignKey: "food_id"});
  sub_food.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(sub_food, { as: "sub_foods", foreignKey: "food_id"});
  user_food.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(user_food, { as: "user_foods", foreignKey: "food_id"});
  food.belongsTo(food_type, { as: "type", foreignKey: "type_id"});
  food_type.hasMany(food, { as: "foods", foreignKey: "type_id"});
  like_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id"});
  restaurant.hasMany(like_res, { as: "like_res", foreignKey: "res_id"});
  rate_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id"});
  restaurant.hasMany(rate_res, { as: "rate_res", foreignKey: "res_id"});
  user_in_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id"});
  restaurant.hasMany(user_in_res, { as: "user_in_res", foreignKey: "res_id"});
  like_res.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(like_res, { as: "like_res", foreignKey: "user_id"});
  orders.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(orders, { as: "orders", foreignKey: "user_id"});
  rate_res.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(rate_res, { as: "rate_res", foreignKey: "user_id"});
  user_food.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_food, { as: "user_foods", foreignKey: "user_id"});
  user_in_res.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_in_res, { as: "user_in_res", foreignKey: "user_id"});

  return {
    food,
    food_type,
    like_res,
    orders,
    rate_res,
    restaurant,
    sub_food,
    user,
    user_food,
    user_in_res,
  };
}
