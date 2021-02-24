const db = require("./index");
module.exports = function (sequelize, DataTypes) {
  const OperationCategory = sequelize.define(
    "OperationCategory",
    {
      Name: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      OperationTypeID: {
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
      foreignKey: "OperationTypeID",
      as: "OperationType",
    });
    OperationCategory.hasMany(models.Operation, { as: "Operations" });
  };
  return OperationCategory;
};
