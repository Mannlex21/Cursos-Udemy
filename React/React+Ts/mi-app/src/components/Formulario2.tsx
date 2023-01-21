import React from 'react'
import { useForm } from '../hooks/useForm';

export const Formulario2 = () => {
    const { postal, ciudad, formulario, handleChange } = useForm({
        postal: '63200',
        ciudad: 'tuxpan'
    });
    // const { postal, ciudad } = formulario;
  return (
        <form autoComplete='off'>
            <div className="mb-3">
                <label className='form-label'>Codigo postal</label>
                <input type="text" name="postal" className='form-control' onChange={ev => handleChange(ev)} value={postal} />
            </div>

            <div className="mb-3">
                <label className='form-label'>Ciudad</label>
                <input type="text" name="ciudad" className='form-control' onChange={ev => handleChange(ev)} value={ciudad}/>
            </div>
            <pre>{ JSON.stringify(formulario)}</pre>
        </form>
  )
}
