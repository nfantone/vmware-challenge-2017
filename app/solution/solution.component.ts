import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FaasStatusService } from './providers/faasStatus.service';
import { FaasPlatformService } from '../impl/faasPlatform.service';
import { IFaasStatus } from './models/FaasStatus';

const FUNCTIONS_IDS: string[] = ['1', '2', '3', '4'];
const isEnabled = (status: IFaasStatus) => status.enabled;
const isDisabled = (status: IFaasStatus) => !isEnabled(status);

@Component({
  moduleId: __moduleName,
  selector: 'my-solution',
  templateUrl: 'solution.component.html'
})
export class SolutionComponent implements OnInit {
  enabledFaasStatuse$: Observable<IFaasStatus[]>;
  disabledFaasStatuse$: Observable<IFaasStatus[]>;

  constructor(
    private faasStatusService: FaasStatusService,
    private faasPlatformService: FaasPlatformService
  ) { }

  ngOnInit() {
    this.enabledFaasStatuse$ = this.faasStatusService.getManyFaasStatuse$(FUNCTIONS_IDS)
      .map((faasStatuses: IFaasStatus[]) => faasStatuses.filter(isEnabled));

    this.disabledFaasStatuse$ = this.faasStatusService.getManyFaasStatuse$(FUNCTIONS_IDS)
      .map((faasStatuses: IFaasStatus[]) => faasStatuses.filter(isDisabled));
  }

  toggleFaas(faasStatus: IFaasStatus) {
    this.enabledFaasStatuse$
      .first().subscribe((faasStatuses: IFaasStatus[]) => {
        return (faasStatuses.length > 1 || !faasStatus.enabled) &&
          this.faasPlatformService.enableFaas(faasStatus.id, !faasStatus.enabled)
            .first().subscribe();
      });
  }
}
