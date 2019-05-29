module.exports = function(sequelize, DataTypes) {
  var subs = sequelize.define("subs", {
    subName: {
      DataTypes.TEXT,
      allowNull: false
    },
    amount:{
      DataTypes.FLOAT,
      allowNull: false
    },
    dueDate: {
      DataTypes.DATETIME,
      allowNull: false
    },
    userId: {
      DataTypes.STRING,
      allowNull: false
    },
  });
  subs.associate = function(models) {
    models.subs.hasOne(models.subType, {foreignkey:{
      allowNull: false
    } });
  };
  return subs;
};
