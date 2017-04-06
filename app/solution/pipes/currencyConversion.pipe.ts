import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CurrencyConversionService } from '../providers/currencyConversion.service';

@Pipe({
  name: 'currency'
})
export class CurrencyConversionPipe implements PipeTransform {
  constructor(private currencyConversionService: CurrencyConversionService) { }

  transform(value: number, ...args: string[]): Observable<number> {
    return this.currencyConversionService.convertFromUSD(value, args[0]);
  }
}
