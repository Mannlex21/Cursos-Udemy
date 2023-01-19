import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
  esMayusculas: boolean = true;
  items: MenuItem[] = [];
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo,
    },
  ];
  changeMayus() {
    this.esMayusculas = !this.esMayusculas;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload',
      },
    ];
  }
}
