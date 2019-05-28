module.exports = function(sequelize, DataTypes) {
  var subs = sequelize.define("subs", {
    type: DataTypes.STRING,
    sub_Name: DataTypes.TEXT,
    user_Id: DataTypes.INTEGER
  });
  return Example;
};
