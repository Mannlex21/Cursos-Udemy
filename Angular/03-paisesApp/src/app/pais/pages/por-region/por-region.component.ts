import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  termino: string = '';
  paises: Country[] = [];
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  regionActiva: string = '';
  constructor(private paisService: PaisService) {}

  activarRegion(region: string) {
    if (region == this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(this.regionActiva).subscribe({
      next: (paises: Country[]) => {
        this.paises = paises;
        console.log(paises);
      },
      error: (error) => {
        console.log(error);
        this.paises = [];
      },
      complete: () => {},
    });
  }

  getClaseCSS(region: String) {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
