module.exports = function (sequelize, DataTypes) {
  const Operation = sequelize.define(
    "Operation",
    {
      Amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      Note: {
        type: DataTypes.STRING(140),
        allowNull: true,
      },
      OperationCategoryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      OperationTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      UserID: {
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
      foreignKey: "OperationTypeID",
      as: "OperationType",
    });
    Operation.belongsTo(models.OperationCategory, {
      foreignKey: "OperationCategoryID",
      as: "OperationCategory",
    });
    Operation.belongsTo(models.User, { foreignKey: "UserID", as: "User" });
  };

  return Operation;
};
