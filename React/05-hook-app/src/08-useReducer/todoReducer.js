export const todoReducer = (initialState, action) => {
	switch (action.type) {
		case "ABC":
			throw new Error("Action.type = ABC no esta implementada");
		case "add":
			return [...initialState, action.payload];
		case "remove":
			const state = structuredClone(initialState).filter(
				(todo) => todo.id !== action.payload.id
			);
			localStorage.setItem("todos", JSON.stringify([...state]));
			return [...state];
		default:
			return initialState;
	}
};
