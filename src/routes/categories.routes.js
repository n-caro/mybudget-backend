const { Router } = require("express");
const {AuthMiddleware} = require('../middlewares')

module.exports = function ({ CategoryController }) {
  const router = Router();

  router.get("/", AuthMiddleware, CategoryController.getAll);

  return router;
};
