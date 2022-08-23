import Route from "@ioc:Adonis/Core/Route";

Route.post("/auth", "UsersController.authenticate");

Route.resource("/tools", "ToolsController");
Route.get("/toolsFilter", "ToolsController.toolsFilter");
