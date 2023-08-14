"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controllers/todo.controller");
const router = (0, express_1.Router)();


router.get("/all", todo_controller_1.onGetAllTodos);
router.post("/new", todo_controller_1.onCreateNewTodo);
router.get("/todo/:id", todo_controller_1.onGetTodoById);
router.put("/update/:id", todo_controller_1.onUpdateTodoById);
router.delete("/delete/:id", todo_controller_1.onDeleteTodoById);

module.exports = router;
