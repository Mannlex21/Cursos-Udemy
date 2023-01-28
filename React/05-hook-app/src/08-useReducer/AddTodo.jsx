import React, { useState } from "react";

export const AddTodo = ({ newAddTodo }) => {
	const [description, setDescription] = useState("");
	const onChangeDescription = ({ target: { value, name } }) => {
		setDescription(value);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (description.length <= 1) return;

		newAddTodo &&
			newAddTodo({
				id: new Date().getTime(),
				description,
				done: false,
			});
	};

	return (
		<>
			<form onSubmit={onFormSubmit}>
				<input
					type="text"
					name="description"
					className="form-control"
					placeholder="que hay que hacer?"
					value={description}
					onChange={onChangeDescription}
				/>
				<button type="submit" className="btn btn-primary mt-2">
					Agregar
				</button>
			</form>
		</>
	);
};
