import { FaasStatusService } from './providers/faasStatus.service';
import { IFaasStatus } from './models/FaasStatus';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

const FUNCTIONS_IDS: [string] = ['1', '2', '3', '4', '5', '6', '7', '8'];

const LOW_MEMORY_THESHOLD = 1e+7;
const HIGH_MEMORY_THESHOLD = 2 * LOW_MEMORY_THESHOLD;

@Component({
  moduleId: __moduleName,
  selector: 'my-solution',
  templateUrl: 'solution.component.html',
  styleUrls: ['solution.css']
})
export class SolutionComponent implements OnInit {
  faasStatuses: Observable<IFaasStatus[]>;

  constructor(public faasStatusService: FaasStatusService) {
  }

  isMemoryUsageAboveAverage(faasStatus: IFaasStatus) {
    return faasStatus.totalMemoryAllocation > LOW_MEMORY_THESHOLD &&
      faasStatus.totalMemoryAllocation < HIGH_MEMORY_THESHOLD;
  }

  isMemoryUsageDangerous(faasStatus: IFaasStatus) {
    return faasStatus.totalMemoryAllocation >= HIGH_MEMORY_THESHOLD;
  }

  ngOnInit() {
    this.faasStatuses = this.faasStatusService.getManyFaasStatuse$(FUNCTIONS_IDS);
  }
}
