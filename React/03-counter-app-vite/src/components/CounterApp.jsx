import { useState } from "react";
import PropType from "prop-types";

const CounterApp = ({ value }) => {
	//React renderiza el componente cuando cambia el estado de una variable en su interior.
	//Obviamente al renderizar todo el componente, se vuelven a llamar las partes de codigo
	//en su interior.Se tiene que tener presente esto al codificar por ejemplo: llamadas a apis

	const [counter, setCounter] = useState(value);
	const handlerCounter = (numero) => {
		setCounter(numero);

		//En esta forma podemos acceder al valor actual del counter y se pueden hacer mas cosas
		// en forma de funcion
		// setCounter((c)=> c + 1);
	};
	return (
		<>
			<h1>Counter App</h1>
			<h2>{counter}</h2>

			<button onClick={() => handlerCounter(counter + 1)}>+1</button>
			<button onClick={() => handlerCounter(counter - 1)}>-1</button>
			<button onClick={() => handlerCounter(value)}>reset</button>
		</>
	);
};

CounterApp.propTypes = {
	value: PropType.number.isRequired,
};

export default CounterApp;
