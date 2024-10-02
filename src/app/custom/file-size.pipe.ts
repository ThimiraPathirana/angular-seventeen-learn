import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
  standalone: true
})
export class FileSizePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (!value) return value;

    const k = 1024;
    const size = ['Bytes', 'KB', 'MB', 'GB'];
  
    const i = Math.floor(Math.log(value)/Math.log(k));

    return parseFloat((value/Math.pow(k,i)).toFixed(2)) + ' '+ size[i];
  }

}
