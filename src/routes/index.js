const express = require("express");

module.exports = function ({ AuthRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  // default middlewares
  apiRoutes.use(express.json()); // for parsing application/json
  apiRoutes.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  // Routes
  apiRoutes.use("/auth", AuthRoutes);
  // set base url (example: /api/v1)
  router.use("/api", apiRoutes);

  // Other middlewares:

  return router;
};
