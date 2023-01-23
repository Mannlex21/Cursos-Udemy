import React from "react";
import { TodoProvider } from "./context/TodoProvider";
import { TodoList } from "./components/TodoList";
import { Title } from "./components/Title";

//El contexto es capaz de compartir los estados a los demas componentes
export const Todo = () => {
	return (
		<TodoProvider>
			<Title></Title>
			<TodoList></TodoList>
		</TodoProvider>
	);
};
