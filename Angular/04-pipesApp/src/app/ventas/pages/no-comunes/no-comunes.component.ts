import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  nombre: string = 'Manuel';
  genero: string = 'masculino';

  //i18nSelect
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes = ['Maria', 'Jose', 'Raul'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos 1 cliente',
    other: 'tenemos # clientes',
  };
}
