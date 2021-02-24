const { sign } = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRATIONTIME } = require("../config");

module.exports = (user) => {
  return sign({ user }, JWT_SECRET, { expiresIn: JWT_EXPIRATIONTIME });
}