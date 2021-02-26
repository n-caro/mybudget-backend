const express = require("express");

module.exports = function ({ AuthRoutes, OperationRoutes, CategoriesRoutes, BalanceRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  // default middlewares
  apiRoutes.use(express.json()); // for parsing application/json
  apiRoutes.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  // Routes
  apiRoutes.use("/auth", AuthRoutes);
  apiRoutes.use("/operations", OperationRoutes);
  apiRoutes.use("/categories", CategoriesRoutes);
  apiRoutes.use("/balance", BalanceRoutes);
  // set base url (example: /api/v1)
  router.use("/api", apiRoutes);

  // Other middlewares:

  return router;
};
