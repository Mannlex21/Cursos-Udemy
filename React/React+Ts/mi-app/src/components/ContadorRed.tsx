import React from 'react'
import {  useReducer } from "react";
const initialState = {
  contador: 0
}

type ActionType = {
  type: 'decrementar'
}| {
  type: 'incrementar'
}| {
  type: 'custom', payload: number
}

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1
      }
    case 'decrementar':
      return {
        ...state,
        contador: state.contador - 1
      }
    case 'custom':
      return {
        ...state,
        contador: action.payload
      }
    default:
      return state
  }
}
export const ContadorRed = () => {
  const [{contador}, dispatch] = useReducer(contadorReducer, initialState, () => { return {contador:11} });
  return (
      <>
      <h2>Contador: {contador}</h2>
      <button className='btn btn-outline-primary m-r-5' onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
      <button className='btn btn-outline-primary' onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
      <button className='btn btn-outline-danger' onClick={() => dispatch({ type:'custom', payload:100 })}>100</button>
      </>
  )
}
