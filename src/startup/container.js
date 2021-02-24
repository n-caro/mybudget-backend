const { createContainer, asValue, asClass, asFunction } = require("awilix");
// Config
const config = require("../config");
const app = require(".");
// Services
const { AuthService } = require("../services");
// Controllers
const { AuthController } = require("../controllers");
// Routes
const Routes = require("../routes");
const { AuthRoutes } = require("../routes/index.routes");
// Repositories
const { UserRepository } = require('../repositories')


// create container
const container = createContainer();
container.register({
  config: asValue(config),
  app: asClass(app).singleton(),
});
// Register: Routes
container.register({
  router: asFunction(Routes).singleton(),
  AuthRoutes: asFunction(AuthRoutes).singleton()
});
// Register: Services
container.register({
  AuthService: asClass(AuthService).singleton()
});
// Register: Controllers
container.register({
  AuthController: asClass(AuthController.bind(AuthController)).singleton()
});
// Register: Repositories
container.register({
  UserRepository: asClass(UserRepository).singleton()
});

module.exports = container;
