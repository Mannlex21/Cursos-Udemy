import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  constructor() {}

  transform(value: string, enMayusculas: boolean = true): string {
    return enMayusculas ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}
