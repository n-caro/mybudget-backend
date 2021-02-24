_userRepository = null;

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
}

module.exports = AuthService;
