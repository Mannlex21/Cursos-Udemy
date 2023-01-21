import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";
import { TimePadre } from './components/TimePadre';

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
    </>
  );
}

export default App;
