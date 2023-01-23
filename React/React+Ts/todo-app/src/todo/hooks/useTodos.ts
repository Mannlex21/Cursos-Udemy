import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";
export const useTodos = () => {
	const { todoState, toggleTodo } = useContext(TodoContext);
	const { todos } = todoState;

	return {
		todos: todoState.todos,
		pendingTodos: todos.filter((todo) => !todo.completed).length,
		toggleTodo,
	};
};
