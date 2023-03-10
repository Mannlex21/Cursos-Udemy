import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'hulk'];
  heroeBorrado: string = '';
  isHeroeBorrado: boolean = false;

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
