const db = require("../models");

class UserRepository {
  getByEmail(email) {
    return db.User.findOne({ where: { email } });
  }
  registerUser(User) {
    return db.User.create(User);
  }
}

module.exports = UserRepository;
