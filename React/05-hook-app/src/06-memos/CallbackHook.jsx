import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
	const [counter, setCounter] = useState(0);
	// const increment = () => {
	// 	setCounter(counter + 1);
	// };

	const incrementFather = useCallback((c) => {
		console.log(c);
		setCounter((value) => value + c);
	}, []);

	return (
		<>
			<h1>useCallBack Hook: {counter}</h1>
			<hr />

			<ShowIncrement increment={incrementFather}></ShowIncrement>
		</>
	);
};
