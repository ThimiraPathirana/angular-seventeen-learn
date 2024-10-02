import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value) return value;

    return value.replace(/\b\w/g, char => char.toUpperCase());
  }

}
