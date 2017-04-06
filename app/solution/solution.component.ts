import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FaasStatusService } from './providers/faasStatus.service';

const FUNCTION_IDS = ['1', '2', '3', '4', '5', '6', '7', '8'];

@Component({
   moduleId: __moduleName,
   selector: 'my-solution',
   templateUrl: 'solution.component.html'
})
export class SolutionComponent implements OnInit {
  totalFaasCost$: Observable<number>;
  constructor(private faasStatusService: FaasStatusService) { }

  ngOnInit() {
    this.totalFaasCost$ = this.faasStatusService.getTotalFaasCost$(FUNCTION_IDS);
  }
}
