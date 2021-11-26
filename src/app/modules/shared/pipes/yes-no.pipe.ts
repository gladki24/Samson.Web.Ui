import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo'
})
export class YesNoPipe implements PipeTransform {

  public transform(value?: boolean): string {
    if (value === true) {
      return 'Tak';
    } else if (value === false) {
      return 'Nie';
    } else {
      return 'Brak informacji';
    }
  }

}
