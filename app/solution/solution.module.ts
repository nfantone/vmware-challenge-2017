import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { SharedModule } from '../shared/shared.module';
import { SolutionComponent } from './solution.component';
import { ExchangeRateService } from './providers/exchangeRate.service';
import { FaasStatusService } from './providers/faasStatus.service';
import { CurrencyConversionService } from './providers/currencyConversion.service';
import { CurrencyConversionPipe } from './pipes/currencyConversion.pipe';
import { TotalCostComponent } from './total-cost/totalCost.component';

@NgModule({
   imports: [SharedModule, HttpModule, ClarityModule.forChild()],
   declarations: [SolutionComponent, TotalCostComponent, CurrencyConversionPipe],
   exports: [SolutionComponent],
   providers: [FaasStatusService, ExchangeRateService, CurrencyConversionService]
})
export class SolutionModule { }
