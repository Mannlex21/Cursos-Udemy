import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
  termino: string = '';
  @Input() placeholder: string = 'Buscar';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe({
      next: (valor) => {
        this.onDebounce.emit(valor);
      },
      error: (error) => {},
      complete: () => {},
    });
  }

  teclaPresionada(event: any) {
    this.debouncer.next(this.termino);
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }
}
