import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
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

    this.paisService.buscarCapital(this.termino).subscribe({
      next: (paises: Country[]) => {
        this.paises = paises;
        console.log(paises[0].name);
      },
      error: (error) => {
        console.log(error);
        this.hayError = true;
        this.paises = [];
      },
      complete: () => {},
    });
  }
}
