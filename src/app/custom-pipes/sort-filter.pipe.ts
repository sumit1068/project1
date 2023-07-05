import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFilter',
  pure: false
})
export class SortFilterPipe implements PipeTransform {

  transform(arr: any): any {
    return arr.sort((a:any,b:any) => a-b);
  }

}
