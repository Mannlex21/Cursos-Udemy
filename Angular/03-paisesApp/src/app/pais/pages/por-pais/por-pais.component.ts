import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;
  constructor(private paisService: PaisService) {}

  buscar(query: string) {
    this.termino = query;
    this.mostrarSugerencias = false;
    this.hayError = false;
    if (this.termino.trim().length == 0) {
      return;
    }

    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises: Country[]) => {
        this.paises = paises;
      },
      error: (error) => {
        this.hayError = true;
        this.paises = [];
      },
      complete: () => {},
    });
  }

  sugerencias(termino: any) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe({
      next: (paises) => (this.paisesSugeridos = paises.splice(0, 3)),
      error: (error) => {
        this.mostrarSugerencias = false;
        this.paisesSugeridos = [];
      },
    });
  }
}
