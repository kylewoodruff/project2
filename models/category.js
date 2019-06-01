module.exports = function(sequelize, DataTypes) {
  var category = sequelize.define("category", {
    categoryType: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  category.associate = function(models) {
    console.log(models);
    category.belongsTo(models.subscription);
  };
  return category;
};
