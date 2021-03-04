let _BalanceService = null;

class BalanceController {
  constructor({ BalanceService }) {
    _BalanceService = BalanceService;
  }

  async getBalance(req, res) {
    try {
      const userId = req.user.id;
      const balance = await _BalanceService.getBalance(userId);
      return res.json({balance});
    } catch (error) {
      //TODO: Handle exceptions with middleware
      const status = error.status || 500;
      const message = error.message || "Interval server error.";
      return res.status(status).json({
        status,
        message,
      });
    }
  }
}

module.exports = BalanceController;
