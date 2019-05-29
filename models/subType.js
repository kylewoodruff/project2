module.exports = function(sequelize, DataTypes) {
    var subType = sequelize.define("subTypes", {
      type: {
      DataTypes.STRING,
      allowNull: false
    }
    });
    subType.associate = function(models) {
        models.subType.belongsTo(models.subs);
      };
    return subType;
  };