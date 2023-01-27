import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
	const initialValue = 0;
	const { counter, increment, decrement, reset } = useCounter(initialValue);

	return (
		<>
			<h1>Counter with hook: {counter}</h1>
			<hr />
			<button className="btn btn-primary" onClick={() => increment(10)}>
				+1
			</button>
			<button className="btn btn-primary" onClick={() => decrement(10)}>
				-1
			</button>
			<button className="btn btn-primary" onClick={reset}>
				reset
			</button>
		</>
	);
};
