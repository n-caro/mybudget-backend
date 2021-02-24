if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  PORT: process.env.PORT,
  DB_CONNECTIONURI: process.env.DB_CONNECTIONURI,
};
