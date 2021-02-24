const db = require("./index");
module.exports = function (sequelize, DataTypes) {
  const OperationCategory = sequelize.define(
    "OperationCategory",
    {
      name: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      operationTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  OperationCategory.associate = function (models) {
    OperationCategory.belongsTo(models.OperationType, {
      foreignKey: "OperationTypeId",
    });
    OperationCategory.hasMany(models.Operation, { as: "Operations" });
  };
  return OperationCategory;
};
