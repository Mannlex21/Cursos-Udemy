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
  constructor(private paisService: PaisService) {}

  buscar(query: string) {
    this.termino = query;
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

  sugerencias(event: any) {
    this.hayError = false;
    console.log(event);
  }
}
