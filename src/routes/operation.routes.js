const { Router } = require("express");
const {AuthMiddleware} = require('../middlewares')

module.exports = function ({ OperationController }) {
  const router = Router();

  router.post("/", AuthMiddleware, OperationController.createOperation);
  router.get("/", AuthMiddleware, OperationController.getAll);
  router.get("/type/:typeId", AuthMiddleware, OperationController.getAllByOperationType);
  router.get("/:id", AuthMiddleware, OperationController.getById);
  router.delete("/:id", AuthMiddleware, OperationController.deleteOperation);
  router.patch("/:id", AuthMiddleware, OperationController.updateOperation);

  return router;
};
