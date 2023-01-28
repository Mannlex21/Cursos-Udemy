import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onRemoveTodo }) => {
	return (
		<ul className="list-group">
			{todos.map((todo) => (
				<TodoItem
					todo={todo}
					key={todo.id}
					onRemoveTodo={onRemoveTodo}
				></TodoItem>
			))}
		</ul>
	);
};
