import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState("");

	//Se destructura los props { target: { value } } = event.target.value
	const onInputChange = ({ target: { value } }) => {
		setInputValue(value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return;

		setCategories((cat) => [...cat, inputValue]);
		setInputValue("");
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
