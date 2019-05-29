module.exports = function (sequelize, DataTypes) {
  var subType = sequelize.define("subType", {
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  subType.associate = function (models) {
    subType.belongsTo(models.subscription);
  };
  return subType;
};