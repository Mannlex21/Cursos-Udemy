import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe({
    //   next: ({ id }) => {
    //     console.log(id);
    //     this.paisService.getPaisPorAlpha(id).subscribe({
    //       next: (pais) => {
    //         console.log(pais);
    //       },
    //     });
    //   },
    // });
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap((resp) => console.log(resp)) // lo que el tap hace es ejecutar algo cuando recibe la respuesta el subscribe
      )
      .subscribe({
        next: (resp) => (this.pais = resp),
      });
  }
}
