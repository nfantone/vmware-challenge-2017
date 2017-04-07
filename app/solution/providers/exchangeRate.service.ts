import { IExchangeRates } from '../models/ExchangeRates';
import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * Based URL for the exchange rate API.
 * @type {String}
 */
const API_ROOT_URL = 'https://api.fixer.io';

@Injectable()
export class ExchangeRateService {
  latestExchangeRates: IExchangeRates = null;

  constructor(private http: Jsonp) { }

  getLatestExchangeRates(base: string = 'USD'): Observable<IExchangeRates> {
    return this.latestExchangeRates ? Observable.of(this.latestExchangeRates) :
      this.http.get(`${API_ROOT_URL}/latest?base=${base}&callback=JSONP_CALLBACK`)
        .map((res: Response) => res.json())
        .map((res: IExchangeRates) => {
          this.latestExchangeRates = res;
          return res;
        });
  }
}
