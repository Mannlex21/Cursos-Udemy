import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre = 'Manuel murillo';
  number = 1000;
  objeto = {
    nombre: 'Manuel Murillo',
  };

  constructor(private primeNgConfig: PrimeNGConfig) {
    this.primeNgConfig.ripple = true; //animacion de efecto de click
  }

  cambiarNombre() {
    console.log(this.nombre);
    console.log(this.number);
  }
}
