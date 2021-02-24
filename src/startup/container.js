const { createContainer, asValue, asClass, asFunction } = require("awilix");
// Config
const config = require("../config");
const app = require(".");
// Services
const {  } = require("../services");
// Controllers
const {  } = require("../controllers");
// Routes
const Routes = require("../routes");
const {  } = require("../routes/index.routes");

// create container
const container = createContainer();
container.register({
  config: asValue(config),
  app: asClass(app).singleton(),
});
// Register: Routes
container.register({
  router: asFunction(Routes).singleton(),
});
// Register: Services
container.register({});
// Register: Controllers
container.register({});
// Register: Repositories
container.register({});

module.exports = container;
