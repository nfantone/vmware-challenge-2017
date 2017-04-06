import { IExchangeRates } from '../models/ExchangeRates';
import { ExchangeRateService } from './exchangeRate.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * Expected base currency.
 * @type {String}
 */
const DEFAULT_CURRENCY = 'USD';

@Injectable()
export class CurrencyConversionService {
  constructor(private exchangeRateService: ExchangeRateService) { }

  convertFromUSD(amount: number, to: string): Observable<number> {
    return to === DEFAULT_CURRENCY ? Observable.of(amount) :
      this.exchangeRateService.getLatestExchangeRates()
        .map((exchangeRates: IExchangeRates) => amount * exchangeRates.rates[to]);
  }
}
