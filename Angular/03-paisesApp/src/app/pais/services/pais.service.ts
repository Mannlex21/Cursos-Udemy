import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';
  private apiUrlV3: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}
  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,population,flag,flags,numericCode,alpha3Code,translations'
    );
  }
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisPorAlpha(code: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country>(url, { params: this.httpParams });
  }
}
