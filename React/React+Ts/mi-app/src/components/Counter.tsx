// import {useState} from "react";
import * as React from 'react';
import { useState } from 'react';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const incrementar = (valor: number =1 ) => {
        setCounter(counter + valor);
    };
    
    return (<div>
        <h3>Counter</h3>
        <span>Valor: {counter}</span>
        <br />
        <button className='btn btn-outline-primary mt-2' onClick={() =>incrementar()}>
            +1
        </button>
        <button className='btn btn-outline-primary mt-2' onClick={() =>incrementar(2)}>
            +2
        </button>
        <button className='btn btn-outline-primary mt-2' onClick={() =>setCounter(0)}>
            Reset
        </button>
    </div>);
}