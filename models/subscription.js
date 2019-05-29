module.exports = function(sequelize, DataTypes) {
  var subs = sequelize.define("subs", {
    subType: {
    DataTypes.STRING,
    allowNull: false
  },
    subName: {
      DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Example;
};
