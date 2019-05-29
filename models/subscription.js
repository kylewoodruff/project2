module.exports = function (sequelize, DataTypes) {
  var subs = sequelize.define("subs", {
    subName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
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
    subs.hasOne(models.subType);
  };
  return subs;
};
