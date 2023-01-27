import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "manuel",
		email: "mann@google.com",
	});

	const { username, email } = formState;

	const onInputChange = ({ target: { value, name } }) => {
		// console.log(value);
		setFormState({ ...formState, [name]: value });
	};

	useEffect(() => {}, []);

	useEffect(() => {}, [formState]);

	useEffect(() => {}, [email]);

	return (
		<>
			<h1>Formulario simple</h1>
			<hr />
			<input
				type="text"
				className="form-control"
				placeholder="Username"
				name="username"
				value={username}
				onChange={onInputChange}
			/>
			<input
				type="email"
				className="form-control mt-2"
				placeholder="man@google.com"
				name="email"
				value={email}
				onChange={onInputChange}
			/>
			{username === "manuel" && <Message></Message>}
		</>
	);
};
