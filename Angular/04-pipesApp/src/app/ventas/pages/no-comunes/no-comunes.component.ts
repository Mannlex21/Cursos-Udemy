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
  clientes = ['Maria', 'Jose', 'Raul', 'Raul', 'Raul'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos 1 cliente',
    other: 'tenemos # clientes',
  };

  // KeyValue pipe
  persona = {
    nombre: 'Manuel',
    edad: 35,
    direccion: 'Ottawa, Canada',
  };

  // JSON pipe
  heroes = [
    {
      nombre: 'Manuel',
      vuela: false,
    },
    {
      nombre: 'Wendy',
      vuela: true,
    },
  ];

  cambiarPersona() {
    this.nombre = this.nombre == 'Manuel' ? 'Wendy' : 'Manuel';
    this.genero = this.genero == 'masculino' ? 'femenino' : 'masculino';
  }

  borrarCliente() {
    if (this.clientes.length == 0) {
      this.clientes = ['Maria', 'Jose', 'Raul', 'Raul', 'Raul'];
    } else {
      this.clientes.pop();
    }
  }
}
