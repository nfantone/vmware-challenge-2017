import { Component, Input } from '@angular/core';

const DEFAULT_CURRENCY = 'USD';

@Component({
  moduleId: __moduleName,
  selector: 'wx-cost',
  templateUrl: 'totalCost.component.html'
})
export class TotalCostComponent {
  @Input() usdCost: number;
  availableCurrencies = ['USD', 'GBP', 'EUR'];
  selectedCurrency: string = DEFAULT_CURRENCY;

  switchCurrency(currency) {
    this.selectedCurrency = this.availableCurrencies.includes(currency) ?
      currency : DEFAULT_CURRENCY;
  }
}
