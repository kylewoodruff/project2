module.exports = function (sequelize, DataTypes) {
  var subs = sequelize.define("subscription", {
    subName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  subs.associate = function (models) {
    console.log(models);
    subs.hasOne(models.category, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return subs;
};





