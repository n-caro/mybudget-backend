const { createContainer, asValue, asClass, asFunction } = require("awilix");
// Config
const config = require("../config");
const app = require(".");
// Services
const { AuthService, OperationService, CategoryService, BalanceService } = require("../services");
// Controllers
const { AuthController, OperationController, CategoryController, BalanceController } = require("../controllers");
// Routes
const Routes = require("../routes");
const { AuthRoutes, OperationRoutes, CategoriesRoutes, BalanceRoutes } = require("../routes/index.routes");
// Repositories
const { UserRepository, OperationRepository, CategoryRepository } = require("../repositories");

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
  CategoriesRoutes: asFunction(CategoriesRoutes).singleton(),
  BalanceRoutes: asFunction(BalanceRoutes).singleton()
});
// Register: Services
container.register({
  AuthService: asClass(AuthService).singleton(),
  OperationService: asClass(OperationService).singleton(),
  CategoryService: asClass(CategoryService).singleton(),
  BalanceService: asClass(BalanceService).singleton()
});
// Register: Controllers
container.register({
  AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  OperationController: asClass(OperationController.bind(OperationController)).singleton(),
  CategoryController: asClass(CategoryController.bind(CategoryController)).singleton(),
  BalanceController: asClass(BalanceController.bind(BalanceController)).singleton()
});
// Register: Repositories
container.register({
  UserRepository: asClass(UserRepository).singleton(),
  OperationRepository: asClass(OperationRepository).singleton(),
  CategoryRepository: asClass(CategoryRepository).singleton()
});

module.exports = container;
