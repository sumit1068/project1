import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining2'
})
export class Remaining2Pipe implements PipeTransform {

  transform(input: string): number {
    console.log('remaining2 pipe',input)
     return 100-80;
  }

}
