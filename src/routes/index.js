const express = require("express");

module.exports = function ({ 
  /* Inject Routes here */
 }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  // default middlewares
  apiRoutes.use(express.json());

  // Routes

  // set base url (example: /api/v1)
  router.use("/api", apiRoutes);

  // Other middlewares:

  return router;
};