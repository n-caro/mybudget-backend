const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

module.exports = function ({ BalanceController }) {
  const router = Router();

  router.get("/", AuthMiddleware, BalanceController.getBalance);

  return router;
};
