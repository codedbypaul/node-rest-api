const TodosController = require("../controllers");

exports.routesConfig = function (app) {
  app.get("/todos", [TodosController.list]);
  app.post("/todos", [TodosController.insert]);
  app.get("/todos/:todoId", [TodosController.getById]);
  app.patch("/todos/:todoId", [TodosController.patchById]);
  app.delete("/todos/:todoId", [TodosController.removeById]);
};
