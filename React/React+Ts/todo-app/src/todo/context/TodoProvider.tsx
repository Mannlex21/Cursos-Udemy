import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { TodoState } from "../interfaces/interfaces";
import { todoReducer } from "./TodoReducer";

const INITIAL_STATE: TodoState = {
	todoCount: 2,
	todos: [
		{
			id: "1",
			desc: "Hola como estas",
			completed: false,
		},
		{
			id: "2",
			desc: "Hola como estas2",
			completed: false,
		},
	],
	completed: 0,
	pending: 2,
};

interface props {
	children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
	const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);
	const toggleTodo = (id: string) => {
		dispatch({ type: "toggleTodo", payload: { id: id } });
	};
	return (
		<TodoContext.Provider value={{ todoState, toggleTodo }}>
			{children}
		</TodoContext.Provider>
	);
};
