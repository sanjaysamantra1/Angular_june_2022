import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  pure: false,
})
export class RemainingPipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    return args[0] - value.length;
  }
}
