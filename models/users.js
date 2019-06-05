module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fullName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    emailAddress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
  users.associate = function(models) {
    users.hasMany(models.subscription, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return users;
};
