const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../config/openapi.json");

module.exports = function ({
  AuthRoutes,
  OperationRoutes,
  CategoriesRoutes,
  BalanceRoutes,
}) {
  const router = express.Router();
  const apiRoutes = express.Router();

  // default middlewares
  apiRoutes.use(express.json()); // for parsing application/json
  apiRoutes.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  apiRoutes.use(cors());
  // Routes
  apiRoutes.use("/auth", AuthRoutes);
  apiRoutes.use("/operations", OperationRoutes);
  apiRoutes.use("/categories", CategoriesRoutes);
  apiRoutes.use("/balance", BalanceRoutes);
  // set base url (example: /api/v1)
  router.use("/api", apiRoutes);
  router.use("/api-docs", swaggerUi.serve);
  router.get("/api-docs", swaggerUi.setup(swaggerDocument));
  // Other middlewares:

  return router;
};
