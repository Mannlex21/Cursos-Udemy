import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  nombreLower: string = 'fernando';
  nombreUpper: string = 'fFERNANDO';
  nombreCompleto: string = 'maNuel muRillo';

  fecha: Date = new Date();
}
