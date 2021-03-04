module.exports = function (sequelize, DataTypes) {
  const Type = sequelize.define(
    "Type",
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
  Type.associate = function (models) {
    Type.hasMany(models.Category, { as: "Categories" });
  };
  return Type;
};
