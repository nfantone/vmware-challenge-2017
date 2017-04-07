import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IFaasStatus } from '../models/FaasStatus';

const LOW_MEMORY_THESHOLD = 1e+7;
const HIGH_MEMORY_THESHOLD = 2 * LOW_MEMORY_THESHOLD;

@Component({
  moduleId: __moduleName,
  selector: 'wx-faas-list',
  templateUrl: 'faasStatusList.component.html',
  styleUrls: ['faasStatusList.css']
})
export class FaasStatusListComponent {
  @Input() faasStatuses: IFaasStatus[];
  @Output() onToggleEnable: EventEmitter<IFaasStatus>;

  constructor() {
    this.onToggleEnable = new EventEmitter<IFaasStatus>();
  }

  isMemoryUsageAboveAverage(faasStatus: IFaasStatus) {
    return faasStatus.totalMemoryAllocation > LOW_MEMORY_THESHOLD &&
      faasStatus.totalMemoryAllocation < HIGH_MEMORY_THESHOLD;
  }

  isMemoryUsageDangerous(faasStatus: IFaasStatus) {
    return faasStatus.totalMemoryAllocation >= HIGH_MEMORY_THESHOLD;
  }

  emitToggleEvent(faasStatus: IFaasStatus) {
    this.onToggleEnable.emit(faasStatus);
  }
}
