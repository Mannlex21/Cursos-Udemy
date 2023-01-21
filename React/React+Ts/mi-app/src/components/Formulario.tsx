import React from 'react'
import { useForm } from '../hooks/useForm';
interface FormData {
    email: string;
    name: string;
    edad: number;
}
export const Formulario = () => {
    //desestructura los parametros
    const { email, name, edad, formulario, handleChange} = useForm<FormData>({name:'manuel', email:'manuel@asd.com', edad:10});
    // const { email, name, edad } = formulario;
    return (
        <form autoComplete='off'>
            <div className="mb-3">
                <label className='form-label'>Email</label>
                <input type="email" name="email" className='form-control' onChange={ev => handleChange(ev)} value={email} />
            </div>

            <div className="mb-3">
                <label className='form-label'>Nombre</label>
                <input type="text" name="name" className='form-control' onChange={ev => handleChange(ev)} value={name}/>
            </div>

            <div className="mb-3">
                <label className='form-label'>Edad</label>
                <input type="number" name="edad" className='form-control' onChange={ev => handleChange(ev)} value={edad}/>
            </div>
            <pre>{ JSON.stringify(formulario)}</pre>
        </form>
  )
}
