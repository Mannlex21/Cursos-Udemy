import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()// Esto basicamente dice que la clase se puede inyectar
export class DbzService {
    constructor(){
        console.log('servicio inicializado')
    }

    private _personajes: Personaje[] = [ //_ es un estandar para private
        {
          nombre: 'Goku',
          poder: 10000
        },
        {
          nombre: 'Veggeta',
          poder: 8000
        },
        {
          nombre: 'Krillin',
          poder: 3200
        }
    ];

    get personajes(): Personaje[]{
        // con esto crea un nuevo arreglo para que javascript no haga referencia y no se 
        // manipule el original
        return [...this._personajes]; 
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}