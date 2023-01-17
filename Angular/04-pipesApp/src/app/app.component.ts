import { Component } from '@angular/core';

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

  cambiarNombre() {
    console.log(this.nombre);
    console.log(this.number);
  }
}
