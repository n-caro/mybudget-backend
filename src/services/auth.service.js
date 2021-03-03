_userRepository = null;
const { JWTsignToken } = require("../helpers");
const ErrorResponse = require("../helpers/ErrorResponse");

class AuthService {
  constructor({ UserRepository }) {
    _userRepository = UserRepository;
  }

  async signUp(User) {
    const { email } = User;
    const userExists = await _userRepository.getByEmail(email);
    if (userExists) {
      throw new ErrorResponse("Email is already associated with an account.", 409);
    }
    const user = await _userRepository.registerUser(User);
    return {
      user,
      token: JWTsignToken(user),
    };
  }

  async signIn(user) {
    const { email, password } = user;
    const userDB = await _userRepository.getByEmail(email);
    if (!userDB || (userDB && !userDB.validPassword(password))) {
      throw new ErrorResponse("Invalid email or password.", 401);
    }
    return {
      user: userDB,
      token: JWTsignToken(userDB),
    };
  }
}

module.exports = AuthService;
