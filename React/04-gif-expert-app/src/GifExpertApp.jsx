import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["One punch"]);

	const addCategory = (value) => {
		value = value.toLowerCase();
		if (categories.includes(value)) return;
		setCategories([value, ...categories]);
	};
	return (
		<>
			{/* Titutlo */}
			<h1> GifExpertApp</h1>

			{/* Input de busqueda */}
			<AddCategory
				//asi devuelve un valor el hijo, hacia una funcion
				onNewCategory={(event) => addCategory(event)}
				//Asi envia una funcion o valor, el padre al hijo y dentro setean el valor
				// setCategories={setCategories}
			></AddCategory>
			{categories.map((category, index) => (
				<GifGrid key={category} category={category}></GifGrid>
			))}
		</>
	);
};
