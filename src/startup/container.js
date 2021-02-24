const { createContainer, asValue, asClass, asFunction } = require("awilix");
// Config
const config = require("../config");
const app = require(".");
// Services
const { AuthService, OperationService } = require("../services");
// Controllers
const { AuthController, OperationController } = require("../controllers");
// Routes
const Routes = require("../routes");
const { AuthRoutes, OperationRoutes } = require("../routes/index.routes");
// Repositories
const { UserRepository, OperationRepository } = require("../repositories");

// create container
const container = createContainer();
container.register({
  config: asValue(config),
  app: asClass(app).singleton(),
});
// Register: Routes
container.register({
  router: asFunction(Routes).singleton(),
  AuthRoutes: asFunction(AuthRoutes).singleton(),
  OperationRoutes: asFunction(OperationRoutes).singleton(),
});
// Register: Services
container.register({
  AuthService: asClass(AuthService).singleton(),
  OperationService: asClass(OperationService).singleton()
});
// Register: Controllers
container.register({
  AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  OperationController: asClass(OperationController.bind(OperationController)).singleton(),
});
// Register: Repositories
container.register({
  UserRepository: asClass(UserRepository).singleton(),
  OperationRepository: asClass(OperationRepository).singleton(),
});

module.exports = container;
