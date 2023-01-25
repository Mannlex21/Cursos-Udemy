import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["One punch"]);
	return (
		<>
			{/* Titutlo */}
			<h1> GifExpertApp</h1>

			{/* Input de busqueda */}
			<AddCategory setCategories={setCategories}></AddCategory>
			<ol>
				{categories.map((category, index) => (
					<li key={category + index}>{category}</li>
				))}
			</ol>
			{/* Listado de Gif */}
			{/* Gif Item */}
		</>
	);
};
