module.exports = function (sequelize, DataTypes) {
  const OperationType = sequelize.define(
    "OperationType",
    {
      type: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  //
  OperationType.associate = function (models) {
    /*OperationType.hasMany(models.OperationCategory, { as: "Categories" });
    OperationType.hasMany(models.Operation, { as: "Operations" });*/
  };
  return OperationType;
};
