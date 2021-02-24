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
      operationCategoryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      operationTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "CreatedAt",
      UpdatedAt: "UpdatedAt",
    }
  );

  Operation.associate = function (models) {
    Operation.belongsTo(models.OperationType, {
      foreignKey: "operationTypeID",
      as: "operationType",
    });
    Operation.belongsTo(models.OperationCategory, {
      foreignKey: "operationCategoryID",
      as: "operationCategory",
    });
    Operation.belongsTo(models.User, { foreignKey: "userID", as: "user" });
  };

  return Operation;
};
