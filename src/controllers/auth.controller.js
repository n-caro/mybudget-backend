let _authService = null;

class AuthController {
  constructor({ AuthService }) {
    _authService = AuthService;
  }

  async signUp(req, res) {
    const { body } = req;
    try {
      const createdUser = await _authService.signUp(body);
      return res.status(201).json(createdUser);
    } catch (error) {
      //TODO: Handle exceptions with middleware
      const status = error.status || 500;
      const message = error.message || "Internal server error";
      return res.status(status).json({
        status,
        message,
      });
    }
  }
}

module.exports = AuthController;
