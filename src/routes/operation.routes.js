const { Router } = require("express");
const {AuthMiddleware} = require('../middlewares')

module.exports = function ({ OperationController }) {
  const router = Router();

  router.post("/", AuthMiddleware, OperationController.createOperation);
  router.get("/", AuthMiddleware, OperationController.getAll);
  router.get("/type/:typeId", AuthMiddleware, OperationController.getAllByOperationType);

  return router;
};
