import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'null'
})
export class NullPipe implements PipeTransform {

  public transform(value: unknown, ...args: unknown[]): any {
    if (value === null || value === undefined) {
      return 'Brak';
    }

    return value;
  }

}
