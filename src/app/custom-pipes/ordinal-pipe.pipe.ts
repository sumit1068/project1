import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalPipe'
})
export class OrdinalPipePipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value) || value < 1) {
      return value.toString();
    }

    const suffixes = ['th', 'st', 'nd', 'rd'];
    const remainder = value % 100;

    let suffix;
    if (remainder >= 11 && remainder <= 13) {
      suffix = 'th';
    } else {
      suffix = suffixes[Math.min(value % 10, 3)];
    }

    return value + suffix;
  }

}
