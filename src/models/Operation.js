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
      operationCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      operationTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dateOperation: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: false,
      UpdatedAt: "UpdatedAt",
    }
  );

  Operation.associate = function (models) {
    Operation.belongsTo(models.OperationType, {
      foreignKey: "operationTypeId",
    });
    Operation.belongsTo(models.OperationCategory, {
      foreignKey: "operationCategoryId",
    });
    Operation.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Operation;
};
