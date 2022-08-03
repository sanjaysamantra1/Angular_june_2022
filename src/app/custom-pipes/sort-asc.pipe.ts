import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAsc',
  pure: false,
})
export class SortAscPipe implements PipeTransform {
  transform(arr: any) {
    return arr.sort((a: number, b: number) => a - b);
  }
}
