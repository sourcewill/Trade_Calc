import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, minDigits: number = 2, maxDigits: number = 2, showSignal: boolean = true): any {
    
    let formatted = value.toLocaleString('pt', {
      maximumFractionDigits: maxDigits,
      minimumFractionDigits: minDigits,
    });
    if(value > 0 && showSignal) formatted = `+${formatted}`;
    return formatted;
  }

}
