import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  personajes: Personaje[] = [
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

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
  }
}
