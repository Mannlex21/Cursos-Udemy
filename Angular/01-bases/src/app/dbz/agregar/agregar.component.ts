import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  constructor(private dbzService: DbzService){

  }
  //Recibe eventos
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //Emite eventos
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();
  
  agregar(){
    if(this.nuevo.nombre.trim().length == 0){return;}
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
}
