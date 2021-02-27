module.exports = function (sequelize, DataTypes) {
  const Operation = sequelize.define(
    "Operation",
    {
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      note: {
        type: DataTypes.STRING(140),
        allowNull: true,
      },
      dateOperation: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    },
    {
      timestamps: true,
      createdAt: false,
      UpdatedAt: "updatedAt",
    }
  );

  Operation.associate = function (models) {
    Operation.belongsTo(models.Type, {
      foreignKey: "typeId",
    });
    Operation.belongsTo(models.Category, {
      foreignKey: "categoryId",
    });
    Operation.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Operation;
};
