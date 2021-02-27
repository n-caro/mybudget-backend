if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  PORT: process.env.PORT,
  DB_CONNECTIONURI: process.env.DB_CONNECTIONURI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRATIONTIME: process.env.JWT_EXPIRATIONTIME,
  INCOME_TYPEID: 1,
  EXPENSE_TYPEID: 2
};
