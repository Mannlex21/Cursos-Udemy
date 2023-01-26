import React, { useState } from "react";

// setCategories prop
export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState("");

	//Se destructura los props { target: { value } } = event.target.value
	const onInputChange = ({ target: { value } }) => {
		setInputValue(value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return;

		// setCategories((cat) => [...cat, inputValue]);
		setInputValue("");
		onNewCategory(inputValue.trim());
	};

	return (
		<form onSubmit={(event) => onSubmit(event)}>
			<input
				type="text"
				placeholder="Buscar gifs"
				value={inputValue}
				onChange={(event) => onInputChange(event)}
			/>
		</form>
	);
};
