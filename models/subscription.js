module.exports = function(sequelize, DataTypes) {
  var subscription = sequelize.define("subscription", {
    subscriptionName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    dueDate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  subscription.associate = function(models) {
    console.log(models);
    subscription.hasOne(models.category, {
      foreignKey: {
        allowNull: false
      }
    });
    subscription.belongsTo(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return subscription;
};
