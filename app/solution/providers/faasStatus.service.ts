import { IFaasUsage } from '../../api/FaasUsage';
import { IFaasInfo } from '../../api/FaasInfo';
import { Observable } from 'rxjs/Observable';
import { IFaasStatus } from '../models/FaasStatus';
import { Injectable } from '@angular/core';
import { FaasPlatformService } from '../../impl/faasPlatform.service';

const toFaasStatus = ([usage, info]: [IFaasUsage, IFaasInfo]): IFaasStatus => {
  return {
    id: info.id,
    name: info.name,
    description: info.description,
    state: usage.state,
    totalMonthlyCost: usage.totalMonthlyInvocations * info.invocationCost +
    usage.totalMonthlyRuntime * info.runtimeCost,
    totalMemoryAllocation: usage.instances * info.memoryAllocation,
    enabled: usage.enabled
  };
};

@Injectable()
export class FaasStatusService {
  constructor(private faasService: FaasPlatformService) { }

  getFaasStatuse$(id: string): Observable<IFaasStatus> {
    return this.faasService.getFaasUsage$(id)
      .withLatestFrom(this.faasService.getFaasInfo$(id))
      .map(toFaasStatus);
  }

  getManyFaasStatuse$(ids: string[]): Observable<IFaasStatus[]> {
    return Observable.combineLatest(ids.map((id) => this.getFaasStatuse$(id)));
  }
}
