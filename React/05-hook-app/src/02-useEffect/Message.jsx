import React, { useEffect, useState } from "react";

export const Message = () => {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	useEffect(() => {
		//esto solo cuando el componente se monta o se construye
		console.log("message mounted");
		const onMouseMove = ({ x, y }) => {
			const coords = { x, y };
			console.log(coords);
			setCoords({ x, y });
		};
		//Aqui se crea el espacio en memoria del addEventListener
		//Se agrega la const onMouseMove para que se pueda borrar el
		//espacio en memoria por referencia
		window.addEventListener("mousemove", onMouseMove);

		return () => {
			//esto es cuando el componente se destruye
			console.log("message unmounted");
			//Aqui se remueve el espacio en memoria del addEventListener
			//Se remueve gracias al onMouseMove que es la referencia en memoria
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<>
			<h3>Usuario ya existe</h3>
			{JSON.stringify(coords)}
		</>
	);
};
