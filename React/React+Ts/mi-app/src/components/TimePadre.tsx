import { Timer } from './Timer';
import { useState } from 'react';

export const TimePadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000)
  return (
    <>
      <span>Milisegundos {1000}</span>
      <br />
      <button className='btn btn-outline-success' onClick={() => setMilisegundos(1000)}>1000</button>
      <button className='btn btn-outline-success' onClick={() => setMilisegundos(2000)}>2000</button>
      <Timer milisegundos={milisegundos}></Timer>
    </>
  )
}
