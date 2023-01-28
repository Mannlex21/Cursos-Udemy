import React, { useEffect, useReducer } from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handlerAddTodo = (value) => {
		dispatch({ type: "add", payload: value });
	};

	const handlerRemoveTodo = (id) => {
		dispatch({ type: "remove", payload: { id: id } });
	};

	return (
		<>
			<h1>
				Todo {todos.length}, <small>Pendientes </small>
			</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList
						todos={todos}
						onRemoveTodo={handlerRemoveTodo}
					></TodoList>
				</div>
				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />
					<AddTodo newAddTodo={handlerAddTodo}></AddTodo>
				</div>
			</div>
		</>
	);
};
