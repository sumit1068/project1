import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlepipe'
})
export class TitlepipePipe implements PipeTransform {

  transform(value: string[]): string[] {
    return value.map(name => `Mr. ${name}`);
  }

}
