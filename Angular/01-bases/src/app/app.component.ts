import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Contador app';
  numero: number = 0;
  base: number = 55;

  acumular(valor: number) {
    this.numero += valor;
  }
}

