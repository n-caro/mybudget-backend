_userRepository = null;
const { JWTsignToken } = require("../helpers");

class AuthService {
  constructor({ UserRepository }) {
    _userRepository = UserRepository;
  }

  async signUp(User) {
    const { email } = User;
    const userExists = await _userRepository.getByEmail(email);
    if (userExists) {
      const error = new Error("Account alredy exist.");
      error.status = 409;
      throw error;
    }
    return await _userRepository.registerUser(User);
  }

  async signIn(user) {
    const { email, password } = user;
    const userDB = await _userRepository.getByEmail(email);
    if (!userDB || (userDB && !userDB.validPassword(password))) {
      const error = new Error("Invalid email or password.");
      error.status = 401;
      throw error;
    }
    return {
      user: userDB,
      token: JWTsignToken(userDB),
    };
  }
}

module.exports = AuthService;
