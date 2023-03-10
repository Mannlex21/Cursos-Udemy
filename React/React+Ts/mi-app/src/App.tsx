import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";
import { TimePadre } from './components/TimePadre';
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from './components/Formulario';
import { Formulario2 } from './components/Formulario2';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <h2>useState:</h2>
      <Counter></Counter>
      <Usuario></Usuario>
      
      <h2>useEffect - useRef</h2>
      <hr />
      <TimePadre></TimePadre>

      <h2>useReducer</h2>
      <hr />
      <ContadorRed></ContadorRed>

      <h2>Custom hooks</h2>
      <hr />
      <Formulario></Formulario>
      <Formulario2></Formulario2>
    </>
  );
}

export default App;
