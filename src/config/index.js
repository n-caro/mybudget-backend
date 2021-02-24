if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  DB_CONNECTIONURI: process.env.DB_CONNECTIONURI,
};
