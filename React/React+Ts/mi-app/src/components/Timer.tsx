import { useState, useEffect,useRef } from 'react';
type TimerArgs = {
  milisegundos: number
}
export const Timer = ({milisegundos}: TimerArgs) => {
    const [segundos, setSegundos] = useState(0);
    //useRef se utiliza para mantener un valor sin que sea actualizado cada que se renderice el componente,
    // cabe resaltar que si se actualiza el ref.current no renderiza el componente aunque se puede obtener
    //el ultimo valor del current en todo momento
    const ref = useRef<NodeJS.Timeout>();

    //useEffect se utiliza para ejecutar codigo cuando ciertos estados cambien
    useEffect(() => {
        ref.current && clearInterval(ref.current);
        //se puede actualizar el ref.current asi
        ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos);
    }, [milisegundos]);
    // este ultimo parametro si es [] vacio o simplemente no se pone, entonces siempre se va a ejecutar.
    //Si nosotros le especificamos una o mas variable, entonces solo se ejecutara cuando sus estados sean actualizados
    
  return (
      <>
          <h4>Timer: <small>{segundos}</small></h4>
      </>
  )
}
