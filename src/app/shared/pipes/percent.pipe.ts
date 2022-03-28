import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {
  
  transform(value: any, decimals: number = 2, isAbsolute: boolean = false): any {
    value = value * 100;
    if(isAbsolute) value = Math.abs(value);
    let formatted = value.toFixed(decimals).toString().replace('.', ',');
    return `${formatted}%`;
  }

}
