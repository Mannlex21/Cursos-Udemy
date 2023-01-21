import React, { ChangeEvent } from 'react'
import { useState } from 'react';

//Funcion generica
// export function useForm<T>(initState:T) {
export const useForm = <T extends Object>(initState: T) => {
  const [formulario, setFormulario] = useState(initState);
    
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormulario({...formulario, [name]: value})
        console.log(name, value)
    };

    return {
        formulario,
        handleChange,
        ...formulario //desestructura los parametros
    }
}
