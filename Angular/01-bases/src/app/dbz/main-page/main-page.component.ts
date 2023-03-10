import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  // }

  constructor(public dbzService: DbzService){ //con esto se inicializa el servicio
  }
}
